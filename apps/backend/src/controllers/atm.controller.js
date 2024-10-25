import { ATM } from '../models/atm.model.js'
import jwt from 'jsonwebtoken'

export class ATMController {
  static login = async (req, res) => {
    const { cardNumber, pin } = req.body

    try {
      const card = await ATM.findCard(cardNumber, pin);
      
      const token = jwt.sign({ 
        card_number: card.card_number, 
        id: card.id,
        name: card.name
      }, 'secret', {
        expiresIn: '1h'
      })
    
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60,
        path: '/'
      });
    
      res.status(200).json({
        status: 'success',
        message: 'Login successful',
        data: card,
        token
      });
    
    } catch (error) {
      res.status(401).json({
        status: 'error',
        message: error
      })
    }
  }

  static name = async (req, res) => {
    const { card } = req.session
    try {
      const name = await ATM.getName(card.id)
      res.status(200).json({
        status: 'success',
        data: { name }
      })
    } catch (error) {
      res.status(401).send({
        status: 'error',
        message: error
      })
    }
  }

  static checkBalance = async (req, res) => {
    const { card } = req.session
    try {
      const balance = await ATM.getBalance(card.id)
      const name = await ATM.getName(card.id)

      await ATM.addTransaction({
          transaction_type: 'checkBalance',
          amount: 0, 
          date: new Date().toISOString(),
          card_id: card.id
      })

      return res.status(200).json({
          status: 'success',
          message: 'Balance retrieved successfully',
          data: { balance, card_number: card.card_number.slice(-4), name }
      })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error retrieving balance or recording transaction'
        })
    }
  }

  static trasactionsByCardId = async (req, res) => {
    const { card } = req.session

    try {
      const transactions = await ATM.getTransactionsByCardId(card.id)
      res.status(200).json({
        status: 'success',
        data: transactions.reverse()
      })
    } catch (error) {
      res.status(401).send({
        status: 'error',
        message: error
      })
    }
  }

  static withdraw = async (req, res) => {
    const { card } = req.session
    const { amount } = req.body
    try {
      const balance = await ATM.getBalance(card.id)

      if (balance < amount) {
        return res.status(400).json({
          status: 'error',
          message: 'Insufficient balance'
        })
      }
      const newBalance = balance - amount

      await ATM.updateBalance(card.id, newBalance)

      await ATM.addTransaction({
        transaction_type: 'withdraw',
        amount: amount, 
        date: new Date().toISOString(),
        card_id: card.id
      })

      return res.status(200).json({
        status: 'success',
        message: 'Withdraw successful',
        data: newBalance
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Error withdrawing'
      })
    }
  }

  static logout = async (_req, res) => {
    res.setHeader('Set-Cookie', 'access_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax;');
    
    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully'
    })
  }
}

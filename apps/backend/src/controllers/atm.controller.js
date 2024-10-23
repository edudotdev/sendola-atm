import { ATM } from '../models/atm.model.js'
import jwt from 'jsonwebtoken'

export class ATMController {
  static login = async (req, res) => {
    const { cardNumber, pin } = req.body
    console.log(cardNumber, pin)
    await ATM.findCard(cardNumber, pin)
      .then(card => {
        // console.log(card, 'card')
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
        })

        res.status(200).json({
          status: 'success',
          message: 'Login successful',
          data: card,
          token
        })

      })
      .catch(error => res.status(401).json({
        "status": "error",
        "message": error
      }))
  }

  static index = async (req, res) => {
    const { card } = req.session
      await ATM.getName(card.id)
        .then(name => {
          res.status(200).json({
            status: 'success',
            data: { name }
          })
        })
        .catch(error => res.status(401).send({
          status: 'error',
          message: error
        }))
  }

  static checkBalance = async (req, res) => {
    const { card } = req.session
    try {
      const balance = await ATM.getBalance(card.id)
      console.log(balance, 'balance')

      await ATM.addTransaction({
          transaction_type: 'checkBalance',
          amount: 0, 
          date: new Date().toISOString(),
          card_id: card.id
      })

      return res.status(200).json({
          status: 'success',
          message: 'Balance retrieved successfully',
          data: balance
      })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error retrieving balance or recording transaction'
        });
    }
  }

  static trasactionByCardId = async (req, res) => {
    const { card } = req.session
    // console.log(card.id, 'id')
    await ATM.getTransactions(card.id)
      .then(transactions => {
        res.status(200).json({
          status: 'success',
          data: transactions
        })
      })
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
      console.log(balance, 'balance', amount, 'amount')
      const newBalane = balance - amount
      console.log(newBalane, 'newBalane')

      await ATM.addTransaction({
        transaction_type: 'withdraw',
        amount: amount, 
        date: new Date().toISOString(),
        card_id: card.id
      })

      await ATM.updateBalance(card.id, newBalane)
      console.log(newBalane, 'newBalane')
      return res.status(200).json({
        status: 'success',
        message: 'Withdraw successful',
        data: newBalane
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Error withdrawing'
      })
    }
  }
}

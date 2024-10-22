import { ATM } from '../models/atm.model.js'
import jwt from 'jsonwebtoken'

export class ATMController {
  static login = async (req, res) => {
    const { cardNumber, pin } = req.body
    console.log(cardNumber, pin)
    await ATM.findCard(cardNumber, pin)
      .then(card => {
        console.log(card, 'card')
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
}

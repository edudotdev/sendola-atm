import { db } from '../db.js'

export class ATM {
  static findCard(cardNumber, pin) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM cards WHERE card_number = ? AND pin = ?`, [cardNumber, pin], (err, row) => {
        if (err || !row) {
          return reject('Credentials dont match any card in the database');
        }
        const { pin: _, ...publicCard } = row
        resolve(publicCard)
      })
    })
  }

  static getName(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT name FROM cards WHERE id = ?`, [id], (err, row) => {
        if (err || !row) {
          return reject('Error getting card name');
        }
        resolve(row.name)
      })
    })
  }
}

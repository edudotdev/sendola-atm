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

  static getBalance(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT balance FROM balances WHERE card_id = ?`, [id], (err, row) => {
        if (err || !row) {
          return reject('Error getting card balance');
        }
        resolve(row.balance)
      })
    })
  }

  static updateBalance(id, amount) {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE balances SET balance = ? WHERE card_id = ?`, [amount, id], (err, row) => {
        if (err) {
          console.log(err)
          return reject('Error updating balance');
        }
        resolve(row)
      })
    })
  }

  static getTransactions(id) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM transactions WHERE card_id = ?`, [id], (err, rows) => {
        if (err || !rows) {
          return reject('Error getting card transactions');
        }
        resolve(rows)
      })
    })
  }

  static addTransaction({transaction_type, amount, date, card_id}) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO transactions (transaction_type, amount, date, card_id) VALUES (?, ?, ?, ?)`, [transaction_type, amount, date, card_id], (err, row) => {
        if (err) {
          console.log(err)
          return reject('Error adding transaction');
        }
        resolve(row)
      })
    })
  }

  static getTransactionById(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM transactions WHERE id = ?`, [id], (err, row) => {
        if (err || !row) {
          return reject('Error getting transaction');
        }
        resolve(row)
      })
    })
  }
}

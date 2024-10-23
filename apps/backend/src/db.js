import sqlite from 'sqlite3'

sqlite.verbose()

export const db = new sqlite.Database('./db/test.db', sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message)
  }
})

// table cards
db.run(`
  CREATE TABLE IF NOT EXISTS cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    card_number TEXT, 
    pin TEXT
  )`)

// table balances
db.run(`
  CREATE TABLE IF NOT EXISTS balances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_id INTEGER,
    balance NUMERIC(10, 2),
    FOREIGN KEY(card_id) REFERENCES cards(id)
  )`)

// table transactions types
db.run(`
  CREATE TABLE IF NOT EXISTS transaction_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    transaction_type TEXT
  )`)


db.run(`
   CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    transaction_type TEXT,
    amount NUMERIC(10, 2),
    date TEXT,
    card_id INTEGER,
    FOREIGN KEY(transaction_type) REFERENCES transaction_types(transaction_type),
    FOREIGN KEY(card_id) REFERENCES cards(id) -- Relación con el id de la tabla cards
  )
`)

  // // data 
  // db.run(`
  //   INSERT INTO cards (name, card_number, pin) 
  //   VALUES 
  //     ('John Doe', '1234567890123456', '1234'),
  //     ('Jane Smith', '9876543210987654', '5678'),
  //     ('Alex Johnson', '5555666677778888', '9876')
  // `)

  // db.run(`
  //   INSERT INTO balances (card_id, balance) 
  //   VALUES 
  //     (1, 1000.50),  -- John Doe
  //     (2, 500.75),   -- Jane Smith
  //     (3, 1500.00)   -- Alex Johnson
  // `)

  // db.run(`
  //   INSERT INTO transaction_types (transaction_type) 
  //   VALUES 
  //     ('checkBalance'), 
  //     ('withdraw')
  // `)

  // db.run(`
  //   INSERT INTO transactions (transaction_type, amount, date, card_id)  
  //   VALUES 
  //     ('checkBalance', 0.00, '2024-10-19T10:30:00Z', '1'),  
  //     ('withdraw', 100.00, '2024-10-19T11:00:00Z', '1'),   
  //     ('withdraw', 50.00, '2024-10-19T12:00:00Z', '2'),    
  //     ('checkBalance', 0.00, '2024-10-19T13:00:00Z, '2'')  
  //     ('withdraw', 50.00, '2024-10-19T14:00:00Z', '3'),    
  //     ('checkBalance', 0.00, '2024-10-19T15:00:00Z, '3'') 
  // `)

  // db.run(`
  //   INSERT INTO transactions (transaction_type, amount, date, card_id) VALUES 
  //   ('withdraw', 100.00, '2024-10-22 10:00:00', 1), 
  //   ('checkBalance', 0.00, '2024-10-22 11:00:00', 1), 
  //   ('withdraw', 200.00, '2024-10-22 12:00:00', 2), 
  //   ('checkBalance', 0.00, '2024-10-22 13:00:00', 2), 
  //   ('withdraw', 300.00, '2024-10-22 14:00:00', 3), 
  //   ('checkBalance', 0.00, '2024-10-22 15:00:00', 3);
  // `);

  // db.run(`
  //   UPDATE balances SET balance = 10000.00 WHERE card_id = 2;
  // `)
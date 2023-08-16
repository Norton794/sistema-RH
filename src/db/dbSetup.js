// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const dbPath = path.resolve(__dirname, 'db.sqlite');

// function initializeDB() {
//   const db = new sqlite3.Database(dbPath, (err) => {
//     if (err) {
//       console.error('Erro ao abrir o banco de dados:', err.message);
//     } else {
//       console.log('Conectado ao banco de dados SQLite.');
//       createTables();
//     }
//   });
// }

// function createTables() {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS Cargo (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       nome TEXT,
//       descricao TEXT
//     )
//   `);

//   db.run(`
//   CREATE TABLE IF NOT EXISTS Endereco (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     rua TEXT,
//     numero TEXT,
//     complemento TEXT,
//     cidade TEXT,
//     estado TEXT,
//     cep TEXT
//   )
// `);


// db.run(`
//   CREATE TABLE IF NOT EXISTS Funcionario (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     nome TEXT,
//     dataNascimento TEXT,
//     cpf TEXT,
//     salario REAL,
//     cargoId INTEGER,
//     enderecoId INTEGER,
//     FOREIGN KEY (cargoId) REFERENCES Cargo(id),
//     FOREIGN KEY (enderecoId) REFERENCES Endereco(id)
//   )
// `);


// }

// module.exports = {
//   initializeDB,
//   getDB: () => db
// };

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db.sqlite');
let db;

function initializeDB() {
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite.');
      createTables();
    }
  });
}

function createTables() {
  db.run(`
    CREATE TABLE IF NOT EXISTS Cargo (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      descricao TEXT
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS Endereco (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rua TEXT,
    numero TEXT,
    complemento TEXT,
    cidade TEXT,
    estado TEXT,
    cep TEXT
  )
 `);


  db.run(`
  CREATE TABLE IF NOT EXISTS Funcionario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    dataNascimento DATE,
    cpf TEXT,
    salario DECIMAL(10,2),
    cargoId INTEGER,
    enderecoId INTEGER,
    FOREIGN KEY (cargoId) REFERENCES Cargo(id),
    FOREIGN KEY (enderecoId) REFERENCES Endereco(id)
  )
`);
}

initializeDB(); 

module.exports = {
  getDB: () => db
};

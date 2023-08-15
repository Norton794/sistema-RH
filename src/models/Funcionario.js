const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, '../db/database.sqlite');

class Funcionario {
    constructor(id, nome, dataNascimento, cpf, salario, cargoId, enderecoId) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.salario = salario;
        this.cargoId = cargoId;
        this.enderecoId = enderecoId;
    }
}

function initializeDB() {
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Erro ao abrir o banco de dados:', err.message);
        } else {
            console.log('Conectado ao banco de dados SQLite.');
            db.run(`
      CREATE TABLE IF NOT EXISTS Funcionario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        dataNascimento TEXT,
        cpf TEXT,
        salario REAL,
        cargoId INTEGER,
        enderecoId INTEGER,
        FOREIGN KEY (cargoId) REFERENCES Cargo(id),
        FOREIGN KEY (enderecoId) REFERENCES Endereco(id)
      )
    `);
}
});
}

initializeDB();

module.exports = Funcionario;

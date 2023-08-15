const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, '../db/database.sqlite');

class Cargo {
    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

function initializeDB() {
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Erro ao abrir o banco de dados:', err.message);
        } else {
            console.log('Conectado ao banco de dados SQLite.');
            db.run(`
            CREATE TABLE IF NOT EXISTS Cargo (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              nome TEXT,
              descricao TEXT
            )
          `);
        }
    });
}

initializeDB();

module.exports = Cargo;
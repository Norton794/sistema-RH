const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../db/db.sqlite');

function createEndereco(rua, numero, cidade, estado, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    INSERT INTO Endereco (rua, numero, cidade, estado)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [rua, numero, cidade, estado], (err) => {
    db.close();
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function getAllEnderecos(callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    SELECT * FROM Endereco
  `;

  db.all(sql, (err, rows) => {
    db.close();
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
}

function getEnderecoById(id, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    SELECT * FROM Endereco WHERE id = ?
  `;

  db.get(sql, [id], (err, row) => {
    db.close();
    if (err) {
      return callback(err, null);
    }
    callback(null, row);
  });
}

function updateEndereco(id, rua, numero, cidade, estado, callback) {
    const db = new sqlite3.Database(dbPath);
  
    const sql = `
      UPDATE Endereco
      SET rua = ?, numero = ?, cidade = ?, estado = ?
      WHERE id = ?
    `;
  
    db.run(sql, [rua, numero, cidade, estado, id], (err) => {
      db.close();
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
  
  function deleteEndereco(id, callback) {
    const db = new sqlite3.Database(dbPath);
  
    const sql = `
      DELETE FROM Endereco WHERE id = ?
    `;
  
    db.run(sql, [id], (err) => {
      db.close();
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
  
  module.exports = {
    createEndereco,
    getAllEnderecos,
    getEnderecoById,
    updateEndereco,
    deleteEndereco
  };
  


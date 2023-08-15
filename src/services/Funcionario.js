const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../db/db.sqlite');

function createFuncionario(nome, dataNascimento, cpf, salario, cargoId, enderecoId, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    INSERT INTO Funcionario (nome, dataNascimento, cpf, salario, cargoId, enderecoId)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nome, dataNascimento, cpf, salario, cargoId, enderecoId], (err) => {
    db.close();
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function getAllFuncionarios(callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    SELECT * FROM Funcionario
  `;

  db.all(sql, (err, rows) => {
    db.close();
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
}

function getFuncionarioById(id, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    SELECT * FROM Funcionario WHERE id = ?
  `;

  db.get(sql, [id], (err, row) => {
    db.close();
    if (err) {
      return callback(err, null);
    }
    callback(null, row);
  });
}

function updateFuncionario(id, nome, dataNascimento, cpf, salario, cargoId, enderecoId, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    UPDATE Funcionario
    SET nome = ?, dataNascimento = ?, cpf = ?, salario = ?, cargoId = ?, enderecoId = ?
    WHERE id = ?
  `;

  db.run(sql, [nome, dataNascimento, cpf, salario, cargoId, enderecoId, id], (err) => {
    db.close();
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function deleteFuncionario(id, callback) {
  const db = new sqlite3.Database(dbPath);

  const sql = `
    DELETE FROM Funcionario WHERE id = ?
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
  createFuncionario,
  getAllFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario
};

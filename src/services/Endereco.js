const dbSetup = require('../db/dbSetup');

function createEndereco(rua, numero, complemento, cidade, estado, cep, callback) {
  const db = dbSetup.getDB();

  const sql = `
    INSERT INTO Endereco (rua, numero, complemento, cidade, estado, cep)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [rua, numero, complemento, cidade, estado, cep], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function getAllEnderecos(callback) {
  const db = dbSetup.getDB();

  const sql = `
    SELECT * FROM Endereco
  `;

  db.all(sql, (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
}

function getEnderecoById(id, callback) {
  const db = dbSetup.getDB();

  const sql = `
    SELECT * FROM Endereco WHERE id = ?
  `;

  db.get(sql, [id], (err, row) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, row);
  });
}

function updateEndereco(id, rua, numero, complemento, cidade, estado, cep, callback) {
    const db = dbSetup.getDB();
  
    const sql = `
      UPDATE Endereco
      SET rua = ?, numero = ?, complemento = ?, cidade = ?, estado = ?, cep = ?
      WHERE id = ?
    `;
  
    db.run(sql, [rua, numero, complemento, cidade, estado, cep, id], (err) => {

      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
  
  function deleteEndereco(id, callback) {
    const db = dbSetup.getDB();
  
    const sql = `
      DELETE FROM Endereco WHERE id = ?
    `;
  
    db.run(sql, [id], (err) => {

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
  


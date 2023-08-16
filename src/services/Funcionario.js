const dbSetup = require('../db/dbSetup');

function createFuncionario(nome, dataNascimento, cpf, salario, cargoId, enderecoId, callback) {
  const db = dbSetup.getDB();

  const sql = `
    INSERT INTO Funcionario (nome, dataNascimento, cpf, salario, cargoId, enderecoId)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nome, dataNascimento, cpf, salario, cargoId, enderecoId], (err) => {
    
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function getAllFuncionarios(callback) {
  const db = dbSetup.getDB();

  const sql = `
    SELECT * FROM Funcionario
  `;

  db.all(sql, (err, rows) => {
   
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
}

function getFuncionarioById(id, callback) {
  const db = dbSetup.getDB();

  const sql = `
    SELECT * FROM Funcionario WHERE id = ?
  `;

  db.get(sql, [id], (err, row) => {
   
    if (err) {
      return callback(err, null);
    }
    callback(null, row);
  });
}

function updateFuncionario(id, nome, dataNascimento, cpf, salario, cargoId, enderecoId, callback) {
  const db = dbSetup.getDB();

  const sql = `
    UPDATE Funcionario
    SET nome = ?, dataNascimento = ?, cpf = ?, salario = ?, cargoId = ?, enderecoId = ?
    WHERE id = ?
  `;

  db.run(sql, [nome, dataNascimento, cpf, salario, cargoId, enderecoId, id], (err) => {
    
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function deleteFuncionario(id, callback) {
  const db = dbSetup.getDB();

  const sql = `
    DELETE FROM Funcionario WHERE id = ?
  `;

  db.run(sql, [id], (err) => {
    
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

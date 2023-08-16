const dbSetup = require('../db/dbSetup');

function createCargo(nome, descricao, callback) {
    const db = dbSetup.getDB();

    const sql = `
    INSERT INTO Cargo (nome, descricao)
    VALUES (?, ?)
  `;

    db.run(sql, [nome, descricao], (err) => {
    
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

function getAllCargos(callback) {
    const db = dbSetup.getDB();

    const sql = `
    SELECT * FROM Cargo
  `;

    db.all(sql, (err, rows) => {
    
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });
}

function getCargoById(id, callback) {
    const db = dbSetup.getDB();

    const sql = `
    SELECT * FROM Cargo WHERE id = ?
  `;

    db.get(sql, [id], (err, row) => {
    
        if (err) {
            return callback(err, null);
        }
        callback(null, row);
    });
}

function updateCargo(id, nome, descricao, callback) {
    const db = dbSetup.getDB();

    const sql = `
    UPDATE Cargo
    SET nome = ?, descricao = ?
    WHERE id = ?
  `;

    db.run(sql, [nome, descricao, id], (err) => {
    
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

function deleteCargo(id, callback) {
    const db = dbSetup.getDB();

    const sql = `
    DELETE FROM Cargo WHERE id = ?
  `;

    db.run(sql, [id], (err) => {
    
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

module.exports = {
    createCargo,
    getAllCargos,
    getCargoById,
    updateCargo,
    deleteCargo
};

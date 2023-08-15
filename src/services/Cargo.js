const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../db/db.sqlite');

function createCargo(nome, descricao, callback) {
    const db = new sqlite3.Database(dbPath);

    const sql = `
    INSERT INTO Cargo (nome, descricao)
    VALUES (?, ?)
  `;

    db.run(sql, [nome, descricao], (err) => {
        db.close();
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

function getAllCargos(callback) {
    const db = new sqlite3.Database(dbPath);

    const sql = `
    SELECT * FROM Cargo
  `;

    db.all(sql, (err, rows) => {
        db.close();
        if (err) {
            return callback(err, null);
        }
        callback(null, rows);
    });
}

function getCargoById(id, callback) {
    const db = new sqlite3.Database(dbPath);

    const sql = `
    SELECT * FROM Cargo WHERE id = ?
  `;

    db.get(sql, [id], (err, row) => {
        db.close();
        if (err) {
            return callback(err, null);
        }
        callback(null, row);
    });
}

function updateCargo(id, nome, descricao, callback) {
    const db = new sqlite3.Database(dbPath);

    const sql = `
    UPDATE Cargo
    SET nome = ?, descricao = ?
    WHERE id = ?
  `;

    db.run(sql, [nome, descricao, id], (err) => {
        db.close();
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

function deleteCargo(id, callback) {
    const db = new sqlite3.Database(dbPath);

    const sql = `
    DELETE FROM Cargo WHERE id = ?
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
    createCargo,
    getAllCargos,
    getCargoById,
    updateCargo,
    deleteCargo
};

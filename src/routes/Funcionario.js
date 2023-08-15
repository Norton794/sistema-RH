const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/Funcionario');

router.post('/', funcionarioController.createFuncionario);
router.get('/', funcionarioController.getAllFuncionarios);
router.get('/:id', funcionarioController.getFuncionarioById);
router.put('/:id', funcionarioController.updateFuncionario);
router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;

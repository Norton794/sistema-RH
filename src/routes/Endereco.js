const express = require('express');
const EnderecoController = require('../controllers/Endereco');

const router = express.Router();

router.post('/', EnderecoController.createEndereco);
router.get('/', EnderecoController.getAllEnderecos);
router.get('/:id', EnderecoController.getEnderecoById);
router.put("/:id", EnderecoController.updateEndereco);
router.delete("/:id", EnderecoController.deleteEndereco)

module.exports = router;

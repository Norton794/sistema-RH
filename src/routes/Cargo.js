const express = require('express');
const CargoController = require('../controllers/Cargo');

const router = express.Router();

router.post('/', CargoController.createCargo);
router.get('/', CargoController.getAllCargos);
router.get('/:id', CargoController.getCargoById);
router.put('/:id', CargoController.updateCargo);
router.delete('/:id', CargoController.deleteCargo);

module.exports = router;

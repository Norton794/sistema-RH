const CargoService = require('../services/Cargo');

function createCargo(req, res) {
  const { nome, descricao } = req.body;
  
  CargoService.createCargo(nome, descricao, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao criar cargo no banco de dados.'+err.message });
    } else {
      res.status(201).json({ message: 'Cargo criado com sucesso.' });
    }
  });
}

function getAllCargos(req, res) {
  CargoService.getAllCargos((err, cargos) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter cargos do banco de dados.' });
    } else {
      res.status(200).json(cargos);
    }
  });
}

function getCargoById(req, res) {
  const id = req.params.id;

  CargoService.getCargoById(id, (err, cargo) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter cargo do banco de dados.' });
    } else if (!cargo) {
      res.status(404).json({ error: 'Cargo não encontrado.' });
    } else {
      res.status(200).json(cargo);
    }
  });
}

function updateCargo(req, res) {
  const id = req.params.id;
  const { nome, descricao } = req.body;

  CargoService.updateCargo(id, nome, descricao, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao atualizar cargo no banco de dados.' });
    } else {
      res.status(200).json({ message: 'Cargo atualizado com sucesso.' });
    }
  });
}

function deleteCargo(req, res) {
  const id = req.params.id;

  CargoService.deleteCargo(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao excluir cargo do banco de dados.' });
    } else {
      res.status(200).json({ message: 'Cargo excluído com sucesso.' });
    }
  });
}

module.exports = {
  createCargo,
  getAllCargos,
  getCargoById,
  updateCargo,
  deleteCargo
};

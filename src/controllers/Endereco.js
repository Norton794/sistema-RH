const EnderecoService = require('../services/Endereco');

function createEndereco(req, res) {
  const { rua, numero, cidade, estado } = req.body;

  EnderecoService.createEndereco(rua, numero, cidade, estado, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao criar endereço no banco de dados.' });
    } else {
      res.status(201).json({ message: 'Endereço criado com sucesso.' });
    }
  });
}

function getAllEnderecos(req, res) {
  EnderecoService.getAllEnderecos((err, enderecos) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter endereços do banco de dados.' });
    } else {
      res.status(200).json(enderecos);
    }
  });
}

function getEnderecoById(req, res) {
  const id = req.params.id;

  EnderecoService.getEnderecoById(id, (err, endereco) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter endereço do banco de dados.' });
    } else if (!endereco) {
      res.status(404).json({ error: 'Endereço não encontrado.' });
    } else {
      res.status(200).json(endereco);
    }
  });
}

function updateEndereco(req, res) {
    const id = req.params.id;
    const { rua, numero, cidade, estado } = req.body;
  
    EnderecoService.updateEndereco(id, rua, numero, cidade, estado, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao atualizar endereço no banco de dados.' });
      } else {
        res.status(200).json({ message: 'Endereço atualizado com sucesso.' });
      }
    });
  }
  
  function deleteEndereco(req, res) {
    const id = req.params.id;
  
    EnderecoService.deleteEndereco(id, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao excluir endereço do banco de dados.' });
      } else {
        res.status(200).json({ message: 'Endereço excluído com sucesso.' });
      }
    });
  }
  
  module.exports = {
    createEndereco,
    getAllEnderecos,
    getEnderecoById,
    updateEndereco,
    deleteEndereco
  };
  
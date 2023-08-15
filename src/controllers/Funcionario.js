const FuncionarioService = require('../services/Funcionario');

function createFuncionario(req, res) {
  const { nome, dataNascimento, cpf, salario, cargoId, enderecoId } = req.body;

  FuncionarioService.createFuncionario(nome, dataNascimento, cpf, salario, cargoId, enderecoId, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao criar funcionário no banco de dados.' });
    } else {
      res.status(201).json({ message: 'Funcionário criado com sucesso.' });
    }
  });
}

function getAllFuncionarios(req, res) {
  FuncionarioService.getAllFuncionarios((err, funcionarios) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter funcionários do banco de dados.' });
    } else {
      res.status(200).json(funcionarios);
    }
  });
}

function getFuncionarioById(req, res) {
  const id = req.params.id;

  FuncionarioService.getFuncionarioById(id, (err, funcionario) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter funcionário do banco de dados.' });
    } else if (!funcionario) {
      res.status(404).json({ error: 'Funcionário não encontrado.' });
    } else {
      res.status(200).json(funcionario);
    }
  });
}

function updateFuncionario(req, res) {
  const id = req.params.id;
  const { nome, dataNascimento, cpf, salario, cargoId, enderecoId } = req.body;

  FuncionarioService.updateFuncionario(id, nome, dataNascimento, cpf, salario, cargoId, enderecoId, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao atualizar funcionário no banco de dados.' });
    } else {
      res.status(200).json({ message: 'Funcionário atualizado com sucesso.' });
    }
  });
}

function deleteFuncionario(req, res) {
  const id = req.params.id;

  FuncionarioService.deleteFuncionario(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao excluir funcionário do banco de dados.' });
    } else {
      res.status(200).json({ message: 'Funcionário excluído com sucesso.' });
    }
  });
}

module.exports = {
  createFuncionario,
  getAllFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario
};

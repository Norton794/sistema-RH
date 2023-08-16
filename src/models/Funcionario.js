class Funcionario {
    constructor(id, nome, dataNascimento, cpf, salario, cargoId, enderecoId) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.salario = salario;
        this.cargoId = cargoId;
        this.enderecoId = enderecoId;
    }
}

module.exports = Funcionario;

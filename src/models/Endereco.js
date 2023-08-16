class Endereco {
    constructor(id, rua, numero, complemento, cidade, estado, cep) {
        this.id = id;
        this.rua = rua;
        this.complemento = complemento;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
      }
}

module.exports = Endereco;
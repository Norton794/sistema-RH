const express = require('express');
const funcionarios = require("./routes/Funcionario");
const cargos = require("./routes/Cargo");
const enderecos = require("./routes/Endereco");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/funcionarios', funcionarios);
app.use('/api/cargos', cargos);
app.use('/api/enderecos', enderecos);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
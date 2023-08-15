const express = require('express');
const funcionarios = require("./routes/Funcionario")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/funcionarios', funcionarios);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
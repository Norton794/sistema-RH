SELECT
  c.nome as Cargo,
  COUNT(f.id) AS 'QTDE Funcionarios',
  SUM(f.salario) AS 'Total de Salarios'
FROM
  Cargo c
LEFT JOIN
  Funcionario f ON c.id = f.cargoId
GROUP BY
  c.id, c.nome;

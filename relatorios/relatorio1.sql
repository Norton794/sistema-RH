SELECT f.nome as Funcionario, c.nome as Cargo, f.salario as Salario FROM Funcionario f LEFT JOIN Cargo c ON f.cargoId = c.id
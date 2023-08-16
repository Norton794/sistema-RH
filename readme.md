
# Sistema RH

Aplicação simples para controlar os registros de funcionários.



## Documentação da API

### Cargo

#### Cadastra um cargo

```http
  POST /api/cargos
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do cargo |
|`descricao`| `string` | **Obrigatório**. A Descrição do cargo |


#### Retorna todos os cargos cadastrados

```http
  GET /api/cargos
```


#### Retorna um cargo específico

```http
  GET /api/cargos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do cargo |



#### Altera um cargo

```http
  PUT /api/cargos/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do cargo |
|`nome`| `string` | **Obrigatório**. O nome do cargo |
|`descricao`| `string` | **Obrigatório**. A Descrição do cargo |

#### Deleta um cargo

```http
  DELETE /api/cargos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do cargo |



### Endereço

#### Cadastra um endereço

```http
  POST /api/enderecos
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `rua`      | `string` | **Obrigatório**.  |
|`numero`| `string` | **Obrigatório**. |
|`complemento`| `string` |  Opcional. |
|`cidade`| `string` |  **Obrigatório**. |
|`estado`| `string` |  **Obrigatório**. |
|`cep`| `string` |  **Obrigatório**. |

#### Retorna todos os endereços cadastrados

```http
  GET /api/enderecos
```


#### Retorna um endereço específico

```http
  GET /api/enderecos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do endereço |



#### Altera um endereço

```http
  PUT /api/enderecos/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do endereço |
| `rua`      | `string` | **Obrigatório**.  |
|`numero`| `string` | **Obrigatório**. |
|`complemento`| `string` |  Opcional. |
|`cidade`| `string` |  **Obrigatório**. |
|`estado`| `string` |  **Obrigatório**. |
|`cep`| `string` |  **Obrigatório**. |

#### Deleta um endereço

```http
  DELETE /api/enderecos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do endereço |





### Funcionário

#### Cadastra um funcionário

```http
  POST /api/funcionarios
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**.  |
|`dataNascimento`| `date` | **Obrigatório**. |
|`cpf`| `string` |  **Obrigatório**. |
|`salario`| `decimal` |  **Obrigatório**. |
|`cargoId`| `int` |  **Obrigatório**. |
|`enderecoId`| `int` |  **Obrigatório**. |

#### Retorna todos os funcionários cadastrados

```http
  GET /api/funcionarios
```


#### Retorna um funcionário específico

```http
  GET /api/funcionarios/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do funcionário |



#### Altera um funcionário

```http
  PUT /api/funcionarios/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. |
| `nome`      | `string` | **Obrigatório**.  |
|`dataNascimento`| `date` | **Obrigatório**. |
|`cpf`| `string` |  **Obrigatório**. |
|`salario`| `decimal` |  **Obrigatório**. |
|`cargoId`| `int` |  **Obrigatório**. |
|`enderecoId`| `int` |  **Obrigatório**. |

#### Deleta um funcionário

```http
  DELETE /api/funcionarios/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**.  |

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Norton794/sistema-RH.git
```

Entre no diretório do projeto

```bash
  cd sistemaRH
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Acesso

```bash
  http://localhost:8080
```


## Stack utilizada


**Back-end:** Node, Express, SQLite


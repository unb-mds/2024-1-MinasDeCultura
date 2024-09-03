# Modelagem do Banco de Dados

## Visão Geral

O banco de dados é composto por duas tabelas principais que armazenam informações sobre licitações culturais: uma com dados mensais (`tendersmonth`) e outra com dados anuais (`tendersyear`). Atualmente, as tabelas não possuem relações entre si.

## Descrição das Tabelas

### Tabela `tendersmonth`

A tabela `tendersmonth` armazena informações detalhadas sobre as licitações culturais de Minas Gerais organizadas por mês.

| Coluna             | Tipo de Dado | Descrição                                           | Restrição      |
|--------------------|--------------|-----------------------------------------------------|----------------|
| `id`               | `int4`       | Identificador único da licitação mensal              | **Primary Key**|
| `commited_value`   | `numeric`    | Valor comprometido para a licitação naquele mês      |                |
| `liquidated_value` | `numeric`    | Valor liquidado da licitação naquele mês             |                |
| `paid_value`       | `numeric`    | Valor pago da licitação naquele mês                  |                |
| `year`             | `int4`       | Ano da licitação                                     | **NOT NULL**   |
| `month`            | `int4`       | Mês da licitação                                     | **NOT NULL**   |

### Tabela `tendersyear`

A tabela `tendersyear` armazena informações consolidadas das licitações culturais de Minas Gerais por ano.

| Coluna             | Tipo de Dado | Descrição                                           | Restrição      |
|--------------------|--------------|-----------------------------------------------------|----------------|
| `id`               | `int4`       | Identificador único da licitação anual               | **Primary Key**|
| `commited_value`   | `numeric`    | Valor comprometido total para a licitação no ano     |                |
| `liquidated_value` | `numeric`    | Valor liquidado total da licitação no ano            |                |
| `paid_value`       | `numeric`    | Valor pago total da licitação no ano                 |                |
| `year`             | `int4`       | Ano da licitação                                     | **NOT NULL**   |

## Exemplos de Consultas

```sql
-- Seleciona todas as licitações mensais para o ano de 2023
SELECT * FROM tendersmonth WHERE year = 2023;

-- Seleciona todas as licitações anuais com valor pago superior a 100000
SELECT * FROM tendersyear WHERE paid_value > 100000;
```
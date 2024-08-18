## **Guia de Utilização da API de Licitações Culturais de Minas Gerais**

### **Visão Geral**

Esta API permite consultar informações relacionadas a licitações culturais de Minas Gerais. A API foi desenvolvida utilizando Express.js e está organizada em três camadas principais: `models`, `services` e `controllers`. Abaixo, você encontrará a descrição dos endpoints disponíveis e como utilizá-los.

### **Estrutura da API**

A API está localizada no diretório `backend/src/`, e é composta por três endpoints principais:

1. **/units**
2. **/cities**
3. **/tenders**

### **Endpoints**

#### **1. Listar Unidades Administrativas: `/units`**

- **Descrição:** Retorna uma lista de todas as unidades administrativas de Minas Gerais relacionadas à cultura.
- **URL:** `http://localhost:5000/units`
- **Método:** `GET`
- **Parâmetros:** Nenhum

#### **2. Listar Cidades Disponíveis: `/cities`**

- **Descrição:** Retorna uma lista das cidades de Minas Gerais que estão disponíveis para consulta no banco de dados.
- **URL:** `http://localhost:5000/cities`
- **Método:** `GET`
- **Parâmetros:** Nenhum

#### **3. Consultar Licitações: `/tenders`**

- **Descrição:** Retorna uma lista de licitações baseadas nos parâmetros de data e cidade.
- **URL:** `http://localhost:5000/tenders?start=2401&end=2402&city=1`
- **Método:** `GET`
- **Parâmetros:**
  - `start`: Representa o início do período de consulta no formato `AAMM` (ano/mês). Por exemplo, `2401` corresponde a janeiro de 2024.
  - `end`: Representa o fim do período de consulta no formato `AAMM`.
  - `city`: ID da cidade conforme cadastrado na tabela de cidades. Por exemplo, `city=1` corresponde a Juiz de Fora e `city=2` a Montes Claros.

### **Considerações Importantes**

- **Formato de Data:** No banco de dados, os anos são representados pelos dois últimos dígitos. Por exemplo, o ano 2024 é armazenado como `24`.
- **Porta:** A API está configurada para rodar na porta `5000`.

---

Siga este guia para consultar e explorar as licitações culturais de Minas Gerais. Caso tenha dúvidas ou precise de suporte adicional, entre em contato com o time de desenvolvimento.
# Como utilizar o Back-end do projeto

### **Visão Geral**

Esta API permite consultar informações sobre licitações culturais em Minas Gerais. Embora o código-fonte da API esteja disponível em nosso repositório, o acesso ao banco de dados principal é restrito. No entanto, você pode acessar a API publicamente através da seguinte URL: [https://minas-cultura-api.onrender.com](https://minas-cultura-api.onrender.com).


A API foi desenvolvida utilizando Express.js e está organizada em três camadas principais: `models`, `services` e `controllers`. Abaixo, você encontrará a descrição dos endpoints disponíveis e como utilizá-los.

### **Estrutura da API**

A API está localizada no diretório `backend/src/`, e é composta por três endpoints principais:

1. **/tenders**
2. **/tenders/year**
3. **/health**

### **Endpoints**

#### **1. Consultar Licitações Mensais: `/tenders`**

- **Descrição:** Retorna uma lista de licitações baseadas nos parâmetros de data inicial e final.
- **URL:** `https://minas-cultura-api.onrender.com/tenders?start=201501&end=201502`
- **Método:** `GET`
- **Parâmetros:**
  - `start`: Representa o início do período de consulta no formato `AAAAMM` (ano/mês). Por exemplo, `201501` corresponde a janeiro de 2015.
  - `end`: Representa o fim do período de consulta no formato `AAAAMM`.

#### **2. Consultar Licitações Anuais: `/tenders/year`**

- **Descrição:** Retorna os valores totais empenhados, liquidados e pagos no ano informado no parâmetro "year".
- **URL:** `https://minas-cultura-api.onrender.com/tenders/year?year=2024`
- **Método:** `GET`
- **Parâmetros:**
  - `year`: Representa o ano de consulta no formato `AAAA` (ano). Por exemplo, `year=2024` retornará o total de licitações empenhadas, liquidadas e pagas no ano de 2024.

#### **3. Consultar a saúde da aplicação: `/health`**

- **Descrição:** Retorna a mensagem "OK" em caso de sucesso na conexão com a api, este endpoint é necessário para monitorar a estabilidade do sistema.
- **URL:** `https://minas-cultura-api.onrender.com/health`
- **Método:** `GET`



Siga este guia para consultar e explorar as licitações culturais de Minas Gerais. Caso tenha dúvidas ou precise de suporte adicional, entre em contato com o time de desenvolvimento.
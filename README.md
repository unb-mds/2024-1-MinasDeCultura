# 2024-1-Minas de cultura
[Logo](https://github.com/unb-mds/2024-1-MinasDeCultura/blob/main/docs/assets/images/logo_vermelha.png?raw=true)

## Projeto de Análise de Licitações Culturais

Este é um projeto desenvolvido como parte da disciplina de Métodos de Desenvolvimento de Software (MDS) da Universidade de Brasília (UnB). O objetivo principal deste projeto é criar uma plataforma online para análise e armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal, utilizando a plataforma e a API do Querido Diário.

Através desta aplicação, buscamos oferecer uma maneira mais transparente e acessível para que o público em geral possa consultar os gastos governamentais em eventos culturais, shows, teatros e outras atividades culturais.

## 📝 Sumário
- [Minas de Cultura](#projeto-de-análise-de-licitações-culturais)
    - [📝 Sumário](#-sumário)
    - [⚙️ Funcionalidades](#%EF%B8%8F-funcionalidades-previstas)
    - [💻 Tecnologias](#-tecnologias)
    - [🤖 Prototipação e Identidade Visual](#-prototipação-e-identidade-visual)
    - [Protótipo de utilização da API do Querido Diário](#-Protótipo-de-utilização-da-API-do-Querido-Diário)
    - [Como testar o protótipo?](#-Como-testar-o-protótipo?)
    - [👥 Desenvolvedores](#-desenvolvedores)
    - [🗒 Story Map](#-story-map)
    - [🛠 Arquitetura](#-arquitetura)

## ⚙️ Funcionalidades Previstas

- **Coleta de Dados:** Implementação de um mecanismo para coletar dados sobre as dispensas de licitações culturais da API do "Querido Diário".
- **Análise e Armazenamento:** Desenvolvimento de algoritmos para analisar os dados coletados e armazená-los em um banco de dados, garantindo a integridade e segurança das informações.
- **Visualização de Dados:** Criação de interfaces intuitivas para que os usuários possam visualizar os dados de forma clara e compreensível, através de gráficos, tabelas e outros elementos visuais.
- **Pesquisa Avançada:** Possibilidade para os usuários realizarem pesquisas avançadas nos dados, filtrando por diferentes critérios como data, tipo de evento, valor, entre outros, facilitando a busca por informações específicas.
- **Notificações:** Implementação de um sistema de notificações para informar os usuários sobre novas dispensas de licitações adicionadas ao sistema, mantendo-os atualizados sobre as últimas informações disponíveis.


## 💻 Tecnologias

- *Linguagem de Programação:*
<a href="https://www.python.org/" target="_blank"><img src="https://img.shields.io/badge/Python-white?style=for-the-badge&logo=Python&logoColor=blue" alt="Python"></a>

- *Ferramenta de Coleta de Dados:*
<a href="https://scrapy.org/" target="_blank"><img src="https://img.shields.io/badge/Scrapy-pink?style=for-the-badge&logo=scrapy" alt="Scrapy"></a>

- *Framework Web:*
<a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js" alt="Next JS"></a>

- *Banco de Dados:* 
<a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-brown?style=for-the-badge&logo=PostgreSQL" alt="PostgreSQL"></a>

- *Ferramentas Adicionais:* 
<a href="https://www.w3schools.com/html/" target="_blank"><img src="https://img.shields.io/badge/HTML-blue?style=for-the-badge&logo=html5" alt="HTML"></a>
<a href="https://www.w3schools.com/css/" target="_blank"><img src="https://img.shields.io/badge/CSS-GREEN?style=for-the-badge&logo=css3" alt="CSS"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/JavaScript-purple?style=for-the-badge&logo=javascript" alt="JavaScript"></a>
<a href="https://docs.python.org/pt-br/3/library/re.html" target="_blank"><img src="https://img.shields.io/badge/Regex-red?style=for-the-badge" alt="Regex"></a>

## 🤖 Prototipação e Identidade Visual

- *Desenvolvimento da Identidade Visual:* Investimos tempo no desenvolvimento de uma identidade visual consistente para o projeto, incluindo seleção de cores, tipografia e uma logo autêntica baseada na bandeira. Essa identidade visual reflete nossa visão e valores, e está integrada em toda a interface do usuário e materiais de design.

- *Protótipo da Home:* 
  
  ![Home Page](https://raw.githubusercontent.com/unb-mds/2024-1-MinasDeCultura/main/docs/assets/images/Home.jpg)

## Protótipo de utilização da API do Querido Diário

Para fins de testes, desenvolvemos um protótipo de utilização da API do Querido Diário. Tínhamos dúvidas sobre como fazer as requisições e receber os dados, então optamos por criar um formulário. Nesse formulário, o usuário pode inserir um município (limitado aos municípios de Minas Gerais), um termo de busca e um intervalo de datas. Em seguida, o sistema realiza uma solicitação à API do Querido Diário com os parâmetros fornecidos.

Os dados retornados pela API são então renderizados na tela, possibilitando ao usuário visualizar todas as respostas obtidas. Essa abordagem nos permite testar a integração com a API e entender como os dados são estruturados, facilitando o desenvolvimento de futuras funcionalidades.

![Protótipo](https://github.com/unb-mds/2024-1-MinasDeCultura/blob/main/prototipo_form/image.png?raw=true)

## Como testar o protótipo?

Inicialmente, é preciso ter instalado em sua máquina o git e o node.js. Tendo os dois instalados, basta seguis o passo a passo abaixo:

### Clonar o repositório

```bash
git clone https://github.com/unb-mds/2024-1-MinasDeCultura.git
```

### Acessar o repositório

```bash
cd 2024-1-MinasDeCultura
```

### Mudar de branch

```bash
git checkout origin/prototipo_qd
```

### Acessar diretório do protótipo

```bash
cd prototipo_form
```

### Instalar dependências

```bash
npm i
```

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Após seguir esses passos, o servidor de desenvolvimento estará em execução e você poderá acessar o protótipo em seu navegador através do endereço fornecido pelo servidor. Certifique-se de testar todas as funcionalidades conforme necessário.


## 🤖 Prototipação web scraping 
Passo a passo de como usar o scrapy está [aqui](https://unb-mds.github.io/2024-1-MinasDeCultura/Como%20executar/Tutorial_scrapy/)

## 📚 Documentação
 A documentação do projeto está disponível [aqui](https://unb-mds.github.io/2024-1-MinasDeCultura/)

## 🗒 Story Map
O Story Map do projeto está disponível [aqui](https://miro.com/app/board/uXjVKYtRMq0=/?moveToWidget=3458764584482040000&cot=10)

## 🛠 Arquitetura
A arquitetura do projeto está disponível [aqui](https://miro.com/app/board/uXjVKVdk0Cw=/)

## 👥 Desenvolvedores

<center>
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center">
            <a href="https://github.com/Gxaite">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/111130521?v=4" width="150px;"/>
                <h5 class="text-center">Gabriel Scheidt</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/isaacbatista26">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118384776?v=4" width="150px;"/>
                <h5 class="text-center">Isaac Batista</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/rafaelcarvalhoj">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/105162671?v=4" width="150px;"/>
                <h5 class="text-center">Rafael Carvalho</h5>
            </a>
        </td>
        </td>
        <td align="center">
            <a href="https://github.com/devMarcosVM">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/108913498?v=4" width="150px;"/>
                <h5 class="text-center">Marcos Vieira</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/manuvaladares">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119461383?v=4" width="150px;"/>
                <h5 class="text-center">Manuella Magalhães</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/Mateushqms">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/163928182?v=4" width="150px;"/>
                <h5 class="text-center">Mateus Henrique</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/WillxBernardo">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124713089?v=4" width="150px;"/>
                <h5 class="text-center">William Bernardo</h5>
            </a>
        </td>
</table>
</center>

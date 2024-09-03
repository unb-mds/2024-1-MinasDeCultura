# Arquitetura- Minas de Cultura

<div style="display: flex; justify-content: center;">
  <img src="../../assets/images/arquitetura_minas.png" alt="Arquitetura do Sistema Minas de Cultura" style="max-width: 100%; height: auto;">
</div>

## Visão Geral

O projeto Minas de Cultura é uma plataforma desenvolvida para aumentar a transparência dos gastos públicos voltados à cultura no estado de Minas Gerais. A arquitetura do sistema foi projetada para ser escalável, eficiente e de fácil manutenção, utilizando tecnologias modernas para assegurar o desempenho e a confiabilidade do sistema.

## Frontend

O frontend do projeto foi desenvolvido utilizando **Next.js**, um framework poderoso que facilita a renderização do lado do servidor (SSR) e a criação de aplicações web altamente performáticas. Utilizamos **React** para construir a interface do usuário, garantindo uma experiência dinâmica e interativa. A estilização é feita com **Tailwind CSS**, um framework utilitário de CSS que permite criar componentes personalizados e responsivos com facilidade.

### Deploy do Frontend

O deploy do frontend foi realizado na **Vercel**, uma plataforma otimizada para projetos Next.js, que oferece funcionalidades como previews automáticos para cada pull request e suporte integrado para APIs serverless. A escolha da Vercel garante uma entrega contínua e rápida de atualizações, além de um ambiente de desenvolvimento que facilita a colaboração entre as equipes.

## Backend

O backend do projeto é uma **API REST** desenvolvida com **Express.js**, um framework minimalista para Node.js. Essa API é responsável por gerenciar as requisições dos usuários e interagir com o banco de dados **PostgreSQL**. Utilizamos **pgAdmin** para facilitar a administração e o gerenciamento do banco de dados.

### Deploy do Backend

O deploy da nossa API foi realizado no **Render**, uma plataforma de cloud que oferece deploys automáticos a partir de repositórios Git, suporte a SSL automático e escalabilidade fácil. O Render foi escolhido por sua simplicidade e robustez, permitindo que a API esteja sempre disponível e pronta para responder às requisições com alta performance.

## Banco de Dados

O banco de dados **PostgreSQL** é o coração do nosso sistema, onde todos os dados sobre os gastos culturais são armazenados e gerenciados. O banco foi implementado no **Supabase**, uma plataforma que oferece uma alternativa ao Firebase com a robustez do PostgreSQL. Utilizar o Supabase garante não apenas um banco de dados escalável e seguro, mas também uma integração perfeita com o restante da nossa stack tecnológica.

## Coleta de Dados

A coleta de dados para o projeto foi realizada utilizando duas abordagens distintas:

- **Scrapy e Beautiful Soup**: Utilizados para raspagem de dados de fontes com estrutura de dados acessível. Esses frameworks permitem que o sistema extraia informações relevantes de maneira automatizada e eficiente.
- **Selenium**: Utilizado para coletar dados do estado de Minas Gerais, onde o site, apesar de estruturado, não disponibilizava os dados de forma acessível para raspadores convencionais. O Selenium, em conjunto com um driver de navegador, simula interações humanas para extrair as informações necessárias.

Os dados coletados são armazenados em arquivos JSON, que posteriormente são consumidos pelo backend e integrados na API para facilitar o acesso e a apresentação das informações ao usuário final.

## Automação e Workflows

Para garantir a qualidade e a integridade do código, utilizamos **GitHub Actions** para automatizar uma série de processos críticos, incluindo:

- **Testes Automatizados**: Configuramos automações para realizar testes unitários, de integração e de componentes tanto para o frontend quanto para o backend. Esses testes são executados automaticamente a cada novo commit ou pull request, garantindo que novas funcionalidades não quebrem o sistema.
  
- **Raspagem de Dados Automática**: Implementamos um workflow que dispara mensalmente para realizar a raspagem de dados do estado de Minas Gerais, garantindo que as informações apresentadas na plataforma estejam sempre atualizadas.
  
- **Automatização da Documentação**: Criamos uma automação específica para manter a documentação da gitpage sempre atualizada. A documentação é gerada automaticamente e qualquer alteração no código ou na arquitetura do sistema é refletida diretamente na documentação oficial.

## Conclusão das Tecnologias Escolhidas

Abaixo estão as principais tecnologias que compõem o projeto:

- **Linguagens de Programação**: [Python](https://docs.python.org/3/), [JavaScript](https://www.javascript.com/), [TypeScript](https://www.typescriptlang.org/)
- **Framework Web**: [Next.js](https://nextjs.org/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
- **Ferramentas de Coleta de Dados**: Framework [Scrapy](https://scrapy.org/) com auxílio das bibliotecas [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/) e [Selenium](https://www.selenium.dev/)
- **Tecnologias Adicionais**: [Docker](https://www.docker.com/), [Express](https://expressjs.com/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)

## 📁 Histórico de Versão

| Versão |    Data    |                                    Descrição                                     |      Autor      |
| :----: | :--------: | :------------------------------------------------------------------------------: | :-------------: |
|  5.0   | 02/09/2024 |                     Reestruturação da arquitetura                                | Gabriel Scheidt|
|  4.0   | 16/08/2024 |                     Reestruturação da arquitetura                                | Gabriel Scheidt|
|  3.0   | 25/04/2024 |                     Reestruturando Documento de Arquitetura                      | Rafael Carvalho |
|  2.2   | 25/04/2024 |                     Adicionando emojis nos tópicos                               | Isaac Batista |
|  2.1   | 17/04/2024 | Exemplificação de uso da API do Querido Diário e Atualização da issue de suporte | Rafael Carvalho |
|  2.0   | 17/04/2024 |                         Crição do esboço de arquitetura                          | Gabriel Scheidt |
|  1.0   | 14/04/2024 |                         Crição do esboço de arquitetura                          | Gabriel Scheidt |

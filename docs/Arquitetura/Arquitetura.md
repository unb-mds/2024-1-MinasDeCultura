#Arquitetura
Apresentamos a versão inicial da nossa arquitetura, combinando tecnologias chave com as funcionalidades essenciais do nosso serviço. Com um design intuitivo  e baseado na própria arquitetura do Querido Diário.


<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVKVdk0Cw=/?moveToViewport=-1282,-998,3354,1540&embedId=3332397580" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

# Tecnologias

Dado o objetivo principal do projeto, criar uma plataforma online de análise e armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal no estado de Minas Gerais, é indispensável a seleção apropriada das tecnologias para o projeto. As tecnologias abaixo foram estudas para cada caso de uso, desde uso geral até usos específicos.

# Funcionalidades Previstas

Analisando os requisitos do projeto podemos identificar algumas funcionalidades, e com base nelas buscamos as tecnologias mais apropriada para cada situação.

## Coleta de Dados

A parte da coleta de dados é uma das mais importantes do projeto, e baseado na API do querido diário, encontramos algumas tecnologias que podem nos ajudar durante o processo de desenvolvimento e de produção, sendo elas:

- _[Python](https://www.python.org/)_: Linguagem de programação para fazer os limpadores de dados na Web
- Framework _[Scrapy](https://scrapy.org/)_: Framework Python para trabalhar com spiders(limpadores da Web). Através das spiders podemos fazer raspagem de dados na web
- _[Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)_: Biblioteca Python que permite fazer a conversão de elementos HTML em strings. E não apenas isso, mas também nós permite buscar por classes, id's e tipo de dados dentro do documento HTML.
- _[Selenium](https://www.selenium.dev/)_: Biblioteca Python para interagir com o browser. Permite fazer buscas que necessitam de interação com a interface.
- _[FastAPI](https://fastapi.tiangolo.com/)_: Biblioteca Python para criar servidor e receber requisições HTTP para enviar os dados dos escavadores.

## Análise e Armazenamento

A análise dos dados podem ser feitas tanto de forma iterativas, na interface web, quanto do lado do servidor, e para isso temos duas abordagens diferentes:

### Análise

Para a análise do lado do **servidor**, podemos utilizar tanto o a API em _[Python](https://www.python.org/)_ quanto uma API em _[Node.js](https://nodejs.org/en)_.

Para análise dos dados do lado do **cliente**, há diversas bibliotecas para o _[React](https://react.dev/)_, que permite o desenvolvimento de gráficos e renderização dos dados de forma dinâmica.

### Armazenamento

No armazenamento temos duas opções muito atrativas, o _[MongoDB](https://www.mongodb.com/pt-br)_ e o _[Postgres](https://www.postgresql.org/)_. Ambos são ótimos para armazenar os dados, mas para cada parte da aplicação precisamos decidir se um modelo relacional, otimizado para buscas complexas e inserção é melhor que um modelo não-relacional, com liberdade de estrutura e organização por documentos.

## Visualização de Dados

Quando se trata de visualização, estamos tratando da nossa interface Web, que sem dúvidas um ótimo framework para resolver este problema é o _[Next.js](https://nextjs.org/)_. Ele permite fazer renderização do lado do servidor, trabalhar com rotas de uma forma descomplicada, estrutura de pastas dinâmicas e diversas outras features.
Como o _[Next.js](https://nextjs.org/)_ é um framework construído por cima do _[React](https://react.dev/)_, podemos utilizar muitas bibliotecas para plotagem dos dados, dentre elas se destacam: _[React-Charts](https://react-charts.tanstack.com/)_ e a _[Apexcharts](https://react-charts.tanstack.com/)_. Fica a critério do time em tempo de desenvolvimento decidir quais são as mais adequadas para cada situação.

## API Intermediária

Uma das idéias é fazer um sistema de notificação para avisar aos inscritos da plataforma sobre novas licitações com gastos culturais do estado de Minas Gerais, também queremos salvas algumas licitações no nosso banco de dados, e para fazer todo esse trabalho uma ótima ferramenta é o _[Node.js](https://nodejs.org/en)_, dado que nós estaremos trabalhando com _[Next.js](https://nextjs.org/)_, trabalhar com a mesma linguagem tanto do lado do servidor quanto do lado do cliente otimiza os estudos e o tempo de desenvolvimento do time. Para fazer essa API, podemos utilizar algumas bibliotecas, sendo elas:

- _[Express](https://expressjs.com/)_: Criação de servidor para receber requisições HTTP e processar os dados.
- _[Nodemailer](https://www.nodemailer.com/)_: Enviar emails de dentro da nossa aplicação para os inscritos da plataforma.
- _[Prisma](https://www.prisma.io/)_: ORM para manipulação dos bancos de dados.

Vale resaltar que ambos, Node.js e o React.js podem ser escritos por cima das linguagens _[Javascript](https://www.javascript.com/)_ e _[Typescript](https://www.typescriptlang.org/)_. Portanto vai depender da escolha do time em tempo de desenvolvimento qual será a mais aquada para cada serviço.

## Infraestrutura

Uma parte importante da nossa aplicação é aonde vamos publicar. Como não temos uma plataforma definitiva, é crucial desenvolver todo o ecossistema em microsserviços. Com o _[Docker](https://www.docker.com/)_ podemos desenvolver a aplicação em um ambiente controlado, onde determinamos de ponta a ponta os recursos que vão ser utilizados, bibliotecas que vão ser instaladas e configuração de rede para a comunicação dos microsserviços.

# Conclusão das Tecnologias Escolhidas

- **Linguagem de Programação:** Python, Javascript e Typescript.
- **Framework Web:** Next.js.
- **Banco de Dados:** Postgres ou MongoDB (a depende do caso de uso).
- **Ferramenta de Coleta de Dados:** Framework Scrapy com auxilio das bibliotecas Beautiful Soup e Selenium.
- **Tecnologias Adicionais:** Docker, Express, FastAPI, Prisma, Nodemailer, React e Tailwind.

# Como funciona a API do Querido Diário

> 🌐 End Point Raiz da API **https://queridodiario.ok.org.br/api/**

## Recomendação de Estudo para o Squad

### Rest e HTTP API's

- [O que é uma API REST?](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
- [O que são APIs e requisições HTTP ?](https://medium.com/@rullyalves/o-que-s%C3%A3o-apis-e-requisi%C3%A7%C3%B5es-http-919238f48206)

### HTTP Methods

- [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### URL Query String

- [Query String](https://en.wikipedia.org/wiki/Query_string)

## Cidades

`GET: /cities/`

`GET: /cities/?city_name=nome_da_cidade` → QUERY por cidade

| Arquivo   |                                                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição | Aqui é possível obter todas as cidades, e seus respectivos apontadores, tais como ID, sigla de estado, nome e alguns outros atributos. |
| Main Menu |                                                                                                                                        |
| Sub Menu  |                                                                                                                                        |

| PARAMETER | TYPE   | REQUIRE | DESCRIPTION                                                                              |
| --------- | ------ | ------- | ---------------------------------------------------------------------------------------- |
| PARAMS    |        | NO      |                                                                                          |
| BODY      |        | NO      |                                                                                          |
| QUERY     | string | NO      | Podemos buscar por uma cidade específica, e para isso basta fazer uma query no end-point |

### Exemplos de requisição

`GET:https://queridodiario.ok.org.br/api/cities?city_name=Ariquemes`

**Response**

```json
{
    "cities": [
        {
            "territory_id": "1100015",
            "territory_name": "Alta Floresta D'Oeste",
            "state_code": "RO",
            "level": "0"
        },
        {
            "territory_id": "1100023",
            "territory_name": "Ariquemes",
            "state_code": "RO",
            "publication_urls": [
                "http://www.diariomunicipal.com.br/arom/pesquisar?busca_avancada%5B__paper%5D=1&busca_avancada%5BentidadeUsuaria%5D=1211"
            ],
            "level": "1"
        },
        ...
        ]
}
```

`GET: https://queridodiario.ok.org.br/api/cities?city_name=Ariquemes`

**Response**

```json
{
  "cities": [
    {
      "territory_id": "1100023",
      "territory_name": "Ariquemes",
      "state_code": "RO",
      "publication_urls": [
        "http://www.diariomunicipal.com.br/arom/pesquisar?busca_avancada%5B__paper%5D=1&busca_avancada%5BentidadeUsuaria%5D=1211"
      ],
      "level": "1"
    }
  ]
}
```

### Cidade por `territory_id`

`GET: /cities/territory_id`

| Arquivo   |                                                                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descrição | Assim como no exemplo acima, ao invés de efetura uma query no end-point, podemos passar um territory_id e puxar as informações daquele lugar. O territory_id é o código de 7 digitos do IBGE referênte à aquela cidade. |
| Main Menu |                                                                                                                                                                                                                         |
| Sub Menu  |                                                                                                                                                                                                                         |

| PARAMETER | TYPE   | REQUIRE | DESCRIPTION                                                             |
| --------- | ------ | ------- | ----------------------------------------------------------------------- |
| PARAMS    | number | YES     | territory_id é o código de 7 digitos do IBGE referênte à aquela cidade. |
| BODY      |        | NO      |                                                                         |
| QUERY     |        | NO      |                                                                         |

### Exemplo de requisição

`GET: https://queridodiario.ok.org.br/api/cities/1100023`

**Response**

```json
{
  "city": {
    "territory_id": "1100023",
    "territory_name": "Ariquemes",
    "state_code": "RO",
    "publication_urls": [
      "http://www.diariomunicipal.com.br/arom/pesquisar?busca_avancada%5B__paper%5D=1&busca_avancada%5BentidadeUsuaria%5D=1211"
    ],
    "level": "1"
  }
}
```

## Buscar por Termo em uma Cidade

### Exemplo que requisição

Para exemplificar uma consulta por um termo na API do Querido Diário, primeiro vamos fazer uma busca simples, apenas um termo e uma cidade.

`GET: https://queridodiario.ok.org.br/api/gazettes?territory_ids=3507753&&querystring=Cultura`

### Como foi construído essa requisição?

Começamos pelo end-point base, o `/api/gazettes` que permite buscar pelas diários públicações do diário oficial. A API do Querido Diário foi construída por cima de requisições HTTP utilizando queries no end-point, e para realizar essa busca por cidade e termo, temos que fazer duas queries, sendo elas o `territory_id` e a `querystring`. o **territory_id** é o ID no território que obtemos nos end-points comentados na seção anterior, já o **querystring** é o termo de busca que queremos fazer a filtragem. Como não estamos especificando a data, vamos buscar todos os diários que derem match com o territory_id e a querystring.

### Resposta da requisição

```json
{
    "total_gazettes": 66,
    "gazettes": [
        {
            "territory_id": "3507753",
            "date": "2023-11-14",
            "scraped_at": "2023-11-15T00:34:31.472587",
            "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/3507753/2023-11-14/dcc224d0cbcba6aeffe23492424631caa881ede7",
            "territory_name": "Brejo Alegre",
            "state_code": "SP",
            "excerpts": [
                "execução da Lei Paulo Gustavo foram criadas por meio do \nengajamento da sociedade e o presente edital destina-se a apoiar projetos a serem \nexecutados no município de Brejo Alegre. \n\nDeste modo, a Prefeitura Municipal de Brejo Alegre e a Divisão de Cultura, Esportes e \nTurismo tornam público o presente edital elaborado com base na Lei Complementar \n195/2022, no Decreto 11.525/2023 e no Decreto 11.453/2023. \n\nNa realização deste edital estão asseguradas medidas de democratização, \ndesconcentração, descentralização"
            ],
            "edition": "344",
            "is_extra_edition": false,
            "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/3507753/2023-11-14/dcc224d0cbcba6aeffe23492424631caa881ede7.txt"
        }, {...}
    ]
}
```

A resposta é dada por um objeto json, onde ela possui dois objetos, `total_gazettes` e `gazettes`

Uma delas fazaz referência a quatidade de resultados obtidos através dessa busca e um array que possui informações sobre essa busca.

Os dados obtidos em cada elemento do array são auto-explicativos, o mais importante se encontra em `text_url`. Em **text_url** é dado um link de um arquivo .txt onde podemosextrair os dados da publicação.

📃 Exemplo do `text_url` do primeiro objeto do array:

```text

  Conforme Lei Municipal n° 593, de 18 de setembro de 2019

  Quinta-feira, 09 de Junho de 2022 Ano I - Edição nº 108 Página:

  PODER EXECUTIVO 1 ........................................................................................................................................
  LICITAÇÕES E CONTRATOS 1 ..................................................................................................................

  Conforme Lei Municipal n° 593, de 18 de setembro de 2019

  Quinta-feira, 09 de Junho de 2022 Ano I - Edição nº 108 Página: 1

  PODER EXECUTIVO

  LICITAÇÕES E CONTRATOS

  TERMO DE REVOGAÇÃO


  O MUNICIPIO DE BREJO ALEGRE, Estado de São Paulo, torna
  público a revogação do processo de dispensa de licitação cujo objeto é
  a aquisição de prótese dentaria, em decorrência da não apresentação
  na integra  de todos os documentos pela interessada no prazo hábil.
  Brejo Alegre/SP, 08 de junho de 2022.

  RAFAEL ALVES DOS SANTOS
  PREFEITO MUNICIPAL


  TERMO DE ANULAÇÃO


  O MUNICIPIO DE BREJO ALEGRE, Estado de São Paulo, torna
  público a ANULAÇÃO do processo de dispensa de licitação cujo objeto
  é o  fornecimento de concreto usinado e mão de obra para a execução
  dos serviços de piso de concreto, tendo em vista que o valor excede o
  limite previsto no artigo 75, inciso II, da Lei Federal nº 14133/2021.
  Brejo Alegre/SP, 08 de junho de 2022.

   RAFAEL ALVES DOS SANTOS
   PREFEITO MUNICIPAL



  PROCESSO LICITATÓRIO  Nº 47/2022
  DISPENSA DE LICITAÇÃO Nº 24/2022

   Aviso de Intenção de Dispensa de Licitação
  Art. Nº 75, Inciso II, § 3º da Lei nº 14.133/2021

  O MUNICIPIO DE BREJO ALEGRE em conformidade com Art. 75,
  inciso II, § 3º da Lei Federal n.º 14.133/2021, torna público aos
  interessados que a administração municipal pretende realizar cotação
  de preços, podendo eventuais interessados apresentarem as
  propostas no prazo de 3 (três) dias úteis, a contar desta publicação,
  oportunidade em que a administração escolherá a mais vantajosa de
  acordo com os seguintes requisitos:

  OBJETO: Aquisição de 300(trezentos) unidades kits de  testes rápido
  de COVID-19 para entrega imediata, em até 10(dez) dias após o
  recebimento da Autorização de Fornecimento, destinados a Unidade
  Básica de Saúde para atender a população do Município, conforme
  Termo de Referência que se encontra a disposição no site do
  Município.

  FORMA DE PAGAMENTO: Será  efetuado em até 15 dias da data do
  recebimento da Nota Fiscal Eletrônica juntamente com os produtos.

  PRAZO DE ENTREGA: em até 10 (dez) dias após recebimento da
  Autorização de Fornecimento.

  LIMITE PARA APRESENTAÇÃO DA PROPOSTA DE PREÇOS: Dia
  14/06/2022 às 16:00h


  A proposta de Preços deverá ser entregue no Setor de Licitação da
  Prefeitura Municipal de Brejo Alegre, sito a Avenida Pedro de Paula
  Castilho, nº 295, Centro, Brejo Alegre/SP, CEP 16.265-000, no horário
  das 08:00h às 11:00h e das 13:00h as 16:00h, em dias uteis ou pelo e-
  mail: licitacao@brejoalegre.sp.gov.br até a data limite. Outras
  informações e especificações mínimas dos itens poderão ser obtidas
  pelo telefone (18) 3646-8877.

  Brejo Alegre/SP,  09 de junho de 2022.

  Rafael Alves dos Santos
  Prefeito Municipal


  mailto:licitacao@brejoalegre.sp.gov.br

  		2022-06-09T17:49:19-0300

```

## Uma busca mais complexa

Com a API do Querido Diário podemos fazer buscas mais complexas, na [documentação da API](https://queridodiario.ok.org.br/api/docs#/) podemos encontrar outros end-points para fazer requisições mais completas ou de maneiras diferentes. Não só isso, mas também para consultar parâmetros que podem ser utilizados na API.

### End-point da requisição

`GET:https://queridodiario.ok.org.br/api/gazettes?territory_ids=3157005&published_since=2021-01-10&published_until=2024-03-10&querystring=Cultura&size=10&sort_by=descending_date`

Podemos ver que a URL tem bem mais queries, mas não se preocupem, apenas adicionamos um intervalo de data e uma ordem de ordenação da resposta.

### Análise da resposta

```json
{
    "total_gazettes": 34,
    "gazettes": [
        {
            "territory_id": "3157005",
            "date": "2023-11-28",
            "scraped_at": "2023-11-28T22:57:51.151108",
            "url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/3157005/2023-11-28/650e197f49d2686970acff3f574f382fba94792b",
            "territory_name": "Salinas",
            "state_code": "MG",
            "excerpts": [
                "Serv. Terceiros - Pessoa Jurídica 5.000,00\n\n5.000,001.500.000.0000 Recursos não vinculados de Impostos\n\n02.09                                     SECRETARIA MUN. DE EDUCAÇÃO\n\n02.09.01                                  SEC. MUNICIPAL DE EDUCACAO E CULTURA\n\n  12                                      Educacao\n\n  12.122                                  Administracao Geral\n\n  12.122.0041                             ADMINISTRAÇÃO PÚBLICA MUNICIPAL\n\n  12.122.0041.2310                        DESPESAS DE CUSTEIO"
            ],
            "edition": "112",
            "is_extra_edition": false,
            "txt_url": "https://querido-diario.nyc3.cdn.digitaloceanspaces.com/3157005/2023-11-28/650e197f49d2686970acff3f574f382fba94792b.txt"
        },{...},
    ]
}
```

A resposta dada pela requisição contém dois objetos, `total_gazettes` e o array `gazettes`. O **total_gazettes** contém a quantidade de respostas da busca dada pela API, e o array propriamente dito, possui as resposta das buscas com os filtros aplicados. Os objetos do array tem a mesma estrutura do exemplo mais simples, a única coisa que mudou é a filtragem dos dados.

## Opções de filtragem

### Outros end-points

Na [documentação](https://queridodiario.ok.org.br/api/docs#/) temos outros 7 end-points que não foram demonstrados aqui. Recomendo ao time que estude os pré-requisitos na primeira seção antes de ver a documentação de referência.

### Explorando `/api/gazettes`

No end-point `/api/gazettes` temos diversas outras possibilidades de query string para fazer filtragem mais complexas na requisição. Abaixo está listada cada uma delas:

- **NAME → TYPE**
- territory_ids → array[string]
- published_since → string $date
- published_until → string $date
- scraped_since → string $date-time
- scraped_until → string $date-time
- querystring → string
- excerpt_size → integer
- number_of_excerpts → integer
- pre_tags → array[string]
- post_tags → array[string]
- size → integer
- offset → integer
- sort_by → string (relevance, descending_date, ascending_date)

No geral a API é de fácil entendimento, desde que o desenvolvedor ou quem irá construir as requisições tenha um conhecimento breve em requisições HTTP. Caso tenha alguma dúvida, basta responder a [issue](https://github.com/unb-mds/2024-1-Squad07/issues/16) referente a esta página.


| Versão |    Data    |                    Descrição                    |     Autor      |
|:------:|:----------:|:-----------------------------------------------:|:--------------:|
|  2.0   | 17/04/2024 | Crição do esboço de arquitetura                 | Gabriel Scheidt|
|  1.0   | 14/04/2024 | Crição do esboço de arquitetura                 | Gabriel Scheidt|
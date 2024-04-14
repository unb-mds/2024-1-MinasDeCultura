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

`GET: [https://queridodiario.ok.org.br/api/cities](https://queridodiario.ok.org.br/api/cities?city_name=Ariquemes)`

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

`GET: [https://queridodiario.ok.org.br/api/cities?city_name=Ariquemes](https://queridodiario.ok.org.br/api/cities?city_name=Ariquemes)`

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

`GET:[https://queridodiario.ok.org.br/api/gazettes?territory_ids=3507753&&querystring=Cultura](https://queridodiario.ok.org.br/api/gazettes?territory_ids=3507753&&querystring=Cultura)`

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

| Versão |    Data    |                        Descrição                         |      Autor      |
| :----: | :--------: | :------------------------------------------------------: | :-------------: |
|  1.0   | 14/04/2024 | Resumo com exemplo da API do Querido Diário para o Squad | Rafael Carvalho |

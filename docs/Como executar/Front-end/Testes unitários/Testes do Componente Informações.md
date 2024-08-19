# Documentação de Teste para o Componente Informações

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Informacoes no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` e `Jest` para renderizar o componente e validar os elementos visíveis na interface de usuário, garantindo que todos os elementos essenciais estejam presentes e corretamente configurados.

### Casos de Teste

#### Renderização da Imagem do Logo

1. **Objetivo**: Verificar se a imagem do logo é renderizada corretamente.
2. **Teste**:
    - Renderizar o componente Informacoes.
    - Verificar se a imagem com o texto alternativo "Logo Vermelha" está presente no documento.

#### Renderização do Título

1. **Objetivo**: Garantir que o título do componente Informacoes seja exibido com o texto correto.
2. **Teste**:
    - Renderizar o componente Informacoes.
    - Verificar se o título com o texto "Projeto de Análise de Licitações Culturais" está presente no documento.

#### Renderização do Parágrafo

1. **Objetivo**: Validar se o parágrafo dentro do componente Informacoes contém o texto correto.
2. **Teste**:
    - Renderizar o componente Informacoes.
    - Verificar se o parágrafo contém o texto: 
      "Este é um projeto desenvolvido como parte da disciplina de Métodos de Desenvolvimento de Software (MDS) da Universidade de Brasília (UnB). O objetivo principal deste projeto é criar uma plataforma online para análise e armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal, utilizando a plataforma e a API do Querido Diário."

## Considerações Finais

Esses testes garantem que o componente Informacoes está sendo renderizado corretamente e que os elementos principais estão presentes com o conteúdo esperado. Eles asseguram que a imagem, o título e o parágrafo são exibidos conforme o design pretendido e fornecem uma visão completa do propósito e informações do projeto.

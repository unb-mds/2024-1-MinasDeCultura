# Documentação de Teste para o Componente Filtro

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Filtro no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` e `Jest` para renderizar o componente e validar os elementos visíveis na interface de usuário, garantindo que todos os elementos essenciais estejam presentes e corretamente configurados.

### Casos de Teste

#### Renderização do Componente Filtro

1. **Objetivo**: Verificar se o componente `Filtro` é renderizado corretamente com todos os seus elementos principais.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Verificar se o título com o texto "Pesquise por cidade, período e tema" está presente no documento.
    - Verificar se os campos de entrada com os placeholders "Assunto", "Local", "Data Inicial" e "Data final" estão presentes no documento.

#### Manipulação de Mudanças de Entrada para Assunto e Local

1. **Objetivo**: Garantir que os campos de entrada para "Assunto" e "Local" respondem corretamente às alterações do usuário.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Simular a mudança de valor no campo de entrada para "Assunto" com o valor "Educação".
    - Simular a mudança de valor no campo de entrada para "Local" com o valor "Belo Horizonte".
    - Verificar se o campo de entrada para "Assunto" contém o valor "Educação".
    - Verificar se o campo de entrada para "Local" contém o valor "Belo Horizonte".

#### Manipulação de Seleção de Datas Inicial e Final

1. **Objetivo**: Testar a funcionalidade de seleção de datas e garantir que as datas inicial e final são manipuladas corretamente.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Simular a seleção de uma data inicial com o valor "01 / 2024".
    - Simular a seleção de uma data final com o valor "12 / 2023", que é anterior à data inicial.
    - Verificar se o campo de entrada para "Data Inicial" contém o valor "01 / 2024".
    - Verificar se o campo de entrada para "Data final" contém o valor "12 / 2023".

#### Manipulação do Clique no Botão de Busca

1. **Objetivo**: Assegurar que o botão de busca dispara a ação esperada ao ser clicado.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Simular o clique no botão com o texto "Buscar".
    - Verificar se o botão de busca foi clicado com sucesso (podendo ser expandido para verificar se a ação associada ao clique é executada corretamente).

## Considerações Finais

Esses testes garantem que o componente `Filtro` está sendo renderizado corretamente e que os elementos principais estão presentes com o conteúdo esperado. Além disso, verificam se as funcionalidades básicas, como a manipulação de entradas e a seleção de datas, estão funcionando conforme o esperado. Estes testes são essenciais para assegurar que o componente se comporta conforme projetado em diversos cenários de uso.

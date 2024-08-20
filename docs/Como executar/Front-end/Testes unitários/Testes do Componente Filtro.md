# Documentação de Teste para o Componente Filtro

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente `Filtro` no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` e `Jest` para renderizar o componente e validar os elementos visíveis na interface de usuário, garantindo que todos os elementos essenciais estejam presentes e corretamente configurados.

### Casos de Teste

#### Renderização do Componente Filtro

1. **Objetivo**: Verificar se o componente `Filtro` é renderizado corretamente com todos os seus elementos principais.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Verificar se o título com o texto "Pesquise por cidade, período e tema" está presente no documento.
    - Verificar se o seletor de cidades está presente com a opção "Selecione uma cidade".

#### Manipulação da Seleção de Cidade

1. **Objetivo**: Garantir que a seleção de uma cidade no campo de entrada é manipulada corretamente.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Simular a seleção de uma cidade do seletor de cidades.
    - Verificar se a cidade selecionada é refletida no campo de entrada.

#### Manipulação de Seleção de Datas Inicial e Final

1. **Objetivo**: Testar a funcionalidade de seleção de datas e garantir que as datas inicial e final são manipuladas corretamente.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Simular a seleção de uma data inicial com o valor "01 / 2023".
    - Simular a seleção de uma data final com o valor "12 / 2023".
    - Verificar se os campos de entrada para "Data Inicial" e "Data final" contêm os valores selecionados.

#### Verificação dos Gráficos

1. **Objetivo**: Garantir que os gráficos são renderizados corretamente após a seleção de dados.
2. **Teste**:
    - Renderizar o componente `Filtro`.
    - Verificar se os gráficos para "Valor Empenhado", "Valor Liquidado" e "Valor Pago" estão presentes no documento.
    - Verificar se o número de gráficos renderizados corresponde ao esperado (três gráficos).

## Considerações Finais

Esses testes garantem que o componente `Filtro` está sendo renderizado corretamente e que os elementos principais estão presentes com o conteúdo esperado. Além disso, verificam se as funcionalidades básicas, como a manipulação de entradas e a seleção de datas, estão funcionando conforme o esperado. Estes testes são essenciais para assegurar que o componente se comporta conforme projetado em diversos cenários de uso.

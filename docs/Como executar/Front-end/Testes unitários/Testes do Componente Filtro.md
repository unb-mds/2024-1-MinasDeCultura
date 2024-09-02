# Documentação de Teste para o Componente Filtro

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente `Filtro` no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` e `Jest` para renderizar o componente e validar os elementos visíveis na interface do usuário, garantindo que todos os elementos essenciais estejam presentes e configurados corretamente. Além disso, o mock de funções de API e de gráficos foi implementado para isolar o componente e testar seu comportamento de forma independente.

## Casos de Teste

### 1. Renderização e Interação com o Componente Filtro

**Objetivo:** Verificar se o componente `Filtro` é renderizado corretamente, com todos os seus elementos principais, e interage corretamente com os selecionadores de data.

**Teste:**

- Renderizar o componente `Filtro`.
- Verificar se o título com o texto "Pesquise por período" está presente no documento.
- Verificar se os campos de data inicial e final estão presentes.
- Simular a seleção de uma data inicial com o valor "01/2023".
- Simular a seleção de uma data final com o valor "12/2023".
- Verificar se a função `fettchYearAndMonthTender` foi chamada após a seleção das datas.
- Verificar se os valores totais ("Total Empenhado", "Total Liquidado", "Total Pago") são exibidos no documento.
- Verificar se os gráficos são renderizados corretamente, garantindo que o mock de gráficos está presente e o número de gráficos renderizados corresponde ao esperado (dois gráficos).

## Considerações Finais

Os testes garantem que o componente `Filtro` é renderizado corretamente, com os elementos essenciais presentes, e que as funcionalidades básicas, como a manipulação das seleções de data e a exibição de gráficos, estão funcionando conforme o esperado. A utilização de mocks para funções de API e gráficos assegura que o teste seja executado de maneira isolada, focando exclusivamente no comportamento do componente.

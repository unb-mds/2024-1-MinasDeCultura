# Documentação de Teste para o Componente Header

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Header no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` para renderizar o componente e validar os elementos visíveis na interface de usuário, garantindo que todos os elementos essenciais estejam presentes e corretamente configurados.

### Casos de Teste

#### Renderização do Título do Header

1. **Objetivo**: Verificar se o título do componente Header é renderizado corretamente.
2. **Teste**:
    - Renderizar o componente Header.
    - Verificar se o texto "MinasdeCultura" está presente no documento.

#### Alternância do Menu de Navegação (Navbar) ao Clicar no Botão

1. **Objetivo**: Garantir que o menu de navegação (navbar) seja aberto e fechado corretamente ao clicar no botão de alternância.
2. **Teste**:
    - Renderizar o componente Header.
    - Selecionar o botão de alternância do menu pelo `aria-label` com o texto "Open menu".
    - Verificar se o menu está inicialmente fechado, com a classe `max-h-0`.
    - Simular o clique no botão para abrir o menu.
    - Verificar se o menu está visível após o clique, garantindo que a classe `max-h-0` foi removida.
    - Verificar se o botão de alternância mudou para "Close menu" após a abertura do menu.
    - Simular o clique no botão para fechar o menu.
    - Verificar se o menu está fechado novamente, com a classe `max-h-0`.

## Considerações Finais

Esses testes garantem que o componente Header está sendo renderizado corretamente e que o menu de navegação alterna entre aberto e fechado conforme esperado. Eles asseguram que os elementos principais estão presentes e que a interação com o botão de alternância funciona conforme o design pretendido.

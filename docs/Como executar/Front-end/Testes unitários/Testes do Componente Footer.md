# Documentação de Teste para o Componente Footer

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Footer no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` para renderizar o componente e validar a presença e funcionalidade dos links de navegação, garantindo que todos os elementos essenciais estejam presentes e funcionando conforme o esperado.

### Casos de Teste

#### Renderização dos Links de Navegação

1. **Objetivo**: Verificar se os links de navegação no componente Footer são renderizados corretamente.
2. **Teste**:
    - Renderizar o componente Footer.
    - Verificar se os botões com os textos "HOME", "SOBRE" e "PESQUISA FILTRADA" estão presentes no documento.

#### Redirecionamento Correto dos Links de Navegação

1. **Objetivo**: Garantir que os links de navegação redirecionem corretamente para as rotas apropriadas quando clicados.
2. **Teste**:
    - Renderizar o componente Footer.
    - Simular o clique no link com o texto "HOME" e verificar se ele redireciona para a rota `/`.
    - Simular o clique no link com o texto "SOBRE" e verificar se ele redireciona para a rota `/Sobre`.
    - Simular o clique no link com o texto "PESQUISA FILTRADA" e verificar se ele redireciona para a rota `/Pesquisa`.

## Considerações Finais

Esses testes garantem que o componente Footer está sendo renderizado corretamente e que os links de navegação estão presentes e funcionando conforme o esperado. Eles asseguram que cada link direciona para a rota correta, proporcionando uma navegação fluida e intuitiva para o usuário.

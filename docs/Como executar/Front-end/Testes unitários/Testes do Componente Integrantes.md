# Documentação de Teste para o Componente Integrantes

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Integrantes no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` e `Jest` para renderizar o componente e validar a exibição dos dados dos integrantes, garantindo que todos os textos e imagens estejam sendo renderizados conforme esperado.

### Casos de Teste

#### Renderização dos Nomes dos Integrantes

1. **Objetivo**: Verificar se o componente Integrantes exibe corretamente os nomes dos integrantes da equipe.
2. **Teste**:
    - Renderizar o componente Integrantes.
    - Verificar se os nomes dos integrantes são exibidos corretamente, incluindo: Gabriel Scheidt, Isaac Batista, Marcos Marinho, Manuella Valadares, Mateus Henrique, e William Bernardo.

#### Renderização das Imagens dos Integrantes

1. **Objetivo**: Garantir que as imagens dos integrantes sejam renderizadas corretamente com os atributos `src` esperados.
2. **Teste**:
    - Renderizar o componente Integrantes.
    - Verificar se as imagens são exibidas com os atributos `src` corretos correspondentes aos arquivos de imagem importados: Gabriel, Isaac, Marcos, Manuella, Mateus, e William.

## Considerações Finais

Esses testes garantem que o componente Integrantes está sendo renderizado corretamente com todos os nomes e imagens dos integrantes da equipe. Eles asseguram que o componente esteja exibindo as informações conforme esperado e que as imagens estejam associadas aos arquivos corretos.

# Documentação de Teste para o Componente `Busca`

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente `Busca` no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` para renderizar o componente e validar os elementos visíveis na interface de usuário, garantindo que todos os elementos essenciais estejam presentes e corretamente configurados.

### Casos de Teste

#### Renderização da Imagem com o Texto Alternativo Correto

1. **Objetivo**: Verificar se a imagem dentro do componente `Busca` é renderizada corretamente com o texto alternativo esperado.
2. **Teste**:
    - Renderizar o componente `Busca`.
    - Verificar se uma imagem com o `alt` text `Lupa1` está presente no documento.

#### Renderização do Título Principal com o Texto Correto

1. **Objetivo**: Garantir que o título principal do componente `Busca` seja exibido com o texto correto.
2. **Teste**:
     - Renderizar o componente `Busca`.
     - Verificar se o título com o texto "Faça sua busca filtrada" está presente no documento.

#### Renderização do Parágrafo com o Texto Correto

1. **Objetivo**: Validar se o parágrafo dentro do componente `Busca` contém o texto correto.
2. **Teste**:
     - Renderizar o componente `Busca`.
     - Verificar se o parágrafo com o texto "Veja os dados para cada município do Estado de Minas Gerais" está presente no documento.

#### Renderização do Botão com o Texto e Ícone Corretos

1. **Objetivo**: Assegurar que o botão de busca seja exibido com o texto e o ícone apropriados.
2. **Teste**:
     - Renderizar o componente `Busca`.
     - Verificar se o botão com o texto "Buscar" está presente no documento.
     - Verificar se o ícone `MoveRight` (renderizado como SVG) está presente.

## Considerações Finais

Esses testes garantem que o componente `Busca` está sendo renderizado corretamente e que os elementos principais estão presentes com o conteúdo esperado.

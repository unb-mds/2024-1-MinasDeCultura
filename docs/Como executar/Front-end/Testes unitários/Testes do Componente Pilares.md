# Documentação de Teste para o Componente Pilares

## Descrição Geral

Este conjunto de testes foi desenvolvido para verificar o comportamento e a renderização correta do componente Pilares no projeto. A abordagem adotada utiliza a biblioteca `@testing-library/react` para renderizar o componente e validar a presença dos elementos principais, garantindo que o conteúdo esteja exibido corretamente conforme o design esperado.

### Casos de Teste

#### Renderização do Título Principal

1. **Objetivo**: Verificar se o título principal do componente Pilares é renderizado corretamente.
2. **Teste**:
    - Renderizar o componente Pilares.
    - Verificar se o título com o texto "A Secretaria de Cultura e Turismo do Estado de Minas Gerais" está presente no documento.

#### Renderização da Primeira Seção

1. **Objetivo**: Garantir que a primeira seção do componente Pilares seja exibida corretamente.
2. **Teste**:
    - Renderizar o componente Pilares.
    - Verificar se o subtítulo "Deve preservar" está presente no documento.
    - Verificar se o sub-subtítulo "o patrimônio cultural do estado de Minas Gerais" está presente no documento.

#### Renderização da Segunda Seção

1. **Objetivo**: Garantir que a segunda seção do componente Pilares seja exibida corretamente.
2. **Teste**:
    - Renderizar o componente Pilares.
    - Verificar se o subtítulo "Deve promover" está presente no documento.
    - Verificar se o sub-subtítulo "a acessibilidade e inclusão social à cultura" está presente no documento.

#### Renderização da Terceira Seção

1. **Objetivo**: Garantir que a terceira seção do componente Pilares seja exibida corretamente.
2. **Teste**:
    - Renderizar o componente Pilares.
    - Verificar se o subtítulo "Deve fomentar" está presente no documento.
    - Verificar se o sub-subtítulo "a produção artística da população" está presente no documento.

## Considerações Finais

Esses testes garantem que o componente Pilares está sendo renderizado corretamente e que todos os elementos principais, incluindo títulos e subtítulos das seções, estão presentes conforme o esperado. Eles asseguram que o conteúdo está exibido de acordo com o design e requisitos do componente.

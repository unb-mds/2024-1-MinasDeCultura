# Descrição

O padrão de escrita de mensagens de commit deve seguir uma estrutura específica parar facilitar a geração de changelogs automatizados, melhorar a comunicação entre desenvolvedores e ajudar a mander o histórico do repositório organizado. Esse padrão está alinhado com o semver (semantic versioning), descrevendo recursos (features), correções (fixes) e alterações (changes) efetuadas nos commits.

# Exemplo de Commit
```
feat(usuario): criação da tela de login
- criação da tela
- validação do e-mail
- validação da senha
Closes #123
```

# Formato da mensagem do commit

Cada mensagem de commit deve apresentar um cabeçalho, um corpo e um rodapé. 

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
Podemos ler da seguinte forma:
```
Tipo(Escopo): [DESCRIÇÃO_DO_COMMIT]
[
CORPO_DO_COMMIT
]
[RODAPE_DO_COMMIT]
```
## TIPOS

Os prefixos em "Conventional Commits" são labels utilizadas para indentificar o tipo de mudança feita em um commit. O objetivo dos prefoxps é fortalecer uma maneira padronizada de identificar o tipo de mudança em um repositório. Confira abaixo os itens existentes. 

* *build*: Alterações que afetam o sistema de compilação ou dependências externas (npm, gulp, broccoli).
* *ci*: alterações em nossos arquivos e scripts de configuração de CI (Travis, Circle, BrowserStack, SauceLabs).
* *docs*: Apenas a documentação.
* *feat*: Um novo recurso.
* *fix*: Correção de bug.
* *perf*: Mudança de código que melgora a performance.
* *refactor*: Uma alteração que não corrige um bug, nem adiciona um novo recurso.
* *style*: Mudanças que não afetam o significado do código (espaço em branco, falta de ponto e virgula, etc).
* *test*: Adicionando testes ausentes ou corrigindo testes existentes.

## ESCOPO

O escopo do commit é uma parte opcional, curta e de fácil compreenssão. É nela que iremos dizer qual parte do código foi modificada e como indicar que fizemos alterações apenas na camada de Client de um serviço.

## DESCRIÇÃO

A descrição, juntamente com o tipo, é uma das partes mais importantes do padrão: é aqui que deve ser descrito, de maneira clara, sucinta e simplificada, o que foi realizado no commit. É recomendado que essa parte tenha, no máximo, 70 caracteres.

## CORPO

O corpo é a parte da mensagem de commit que fornece detalhes adicionais sobre as alterações feitas no código. O corpo do commit deve ser escrito em uma ou mais linhas e deve fornecer informações suficientes para que outros desenvolvedores possam entender o que foi mudado.

## RODAPÉ

O rodapé também é uma parte opcional da mensagem de commit que pode ser usado para fornecer informações adicionais sobre as alterações feitas no código.O Rodapé do commit pode ser usado para incluir informações como números de ticket de suporte, links para relatórios de bugs ou outros recursos relacionados


## 📁 Histórico de versão
| Versão |    Data    |                    Descrição                    |     Autor    |
|:------:|:----------:|:-----------------------------------------------:|:------------:|
|  1.0   | 11/04/2024 | Adicionando histórico de versão                 | Marcos Vieira|
|  1.2   | 25/04/2024 |                     Adicionando emojis nos tópicos        | Isaac Batista |
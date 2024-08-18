# Carrosel de Notícias

## Descrição
O **Projeto Minas de Cultura** tem como objetivo principal fornecer uma visão clara e acessível dos gastos culturais do Estado de Minas Gerais, promovendo a transparência para todos os cidadãos interessados. Com a crescente preocupação sobre a transparência dos gastos públicos voltados à cultura, implementamos uma feature que exibe um **carrossel de notícias** na página principal do projeto.

Este carrossel mostra as seis notícias mais recentes extraídas diretamente do site da **Secretaria de Cultura do Estado de Minas Gerais (SECULT MG)**. O objetivo é não apenas apresentar dados financeiros, mas também destacar os projetos culturais reais incentivados por esses investimentos, que muitas vezes passam despercebidos.

## Funcionalidade
- **Raspagem de Dados**: Foi desenvolvido um script em Python utilizando a biblioteca **Beautiful Soup** para acessar o site da SECULT MG, realizar a raspagem dos links das notícias mais recentes e das imagens associadas, e disponibilizá-las para exibição no carrossel.
  
- **Exibição no Carrossel**: As notícias são automaticamente atualizadas e exibidas em um carrossel na página principal, oferecendo uma visão imediata e visualmente atraente dos projetos e eventos culturais promovidos pelo governo estadual.

## Fluxo de Implementação

1. **Acesso ao Site da SECULT MG**:
    - O script Python utiliza requisições HTTP para acessar a página de notícias da SECULT MG.
    - A biblioteca Beautiful Soup é utilizada para fazer o parsing do HTML da página.

2. **Raspagem das Notícias**:
    - O script identifica os blocos de notícias, extraindo os links para as seis primeiras notícias disponíveis.
    - Links para imagens associadas às notícias também são extraídos para garantir uma apresentação visual coerente no carrossel.

3. **Armazenamento e Exibição**:
    - As URLs das notícias e das imagens são armazenadas temporariamente e exibidas diretamente no carrossel da página principal.
    - O carrossel é atualizado automaticamente a cada nova execução do script, garantindo que as notícias exibidas estejam sempre atualizadas.

## Benefícios
- **Transparência**: A feature reforça o compromisso do projeto com a transparência ao não apenas mostrar dados financeiros, mas também ao destacar os projetos culturais reais financiados por esses gastos.
  
- **Engajamento**: Exibir notícias atualizadas no carrossel mantém os usuários informados sobre os eventos culturais em Minas Gerais, incentivando maior envolvimento com a cultura local.

- **Automatização**: A raspagem automática garante que o conteúdo exibido esteja sempre atualizado, reduzindo a necessidade de manutenção manual.

## Considerações Finais
A implementação do carrossel de notícias no Projeto Minas de Cultura não só complementa os dados financeiros apresentados, mas também enriquece a experiência do usuário ao oferecer uma visão concreta dos benefícios dos investimentos públicos em cultura. Essa feature fortalece o compromisso com a transparência e aproxima os cidadãos dos projetos culturais realizados no estado.


# 📁 Histórico de versão

| Versão |    Data    |                    Descrição                    |     Autor      |
|:------:|:----------:|:-----------------------------------------------:|:--------------:|
|  1.0   | 18/08/2024 | Adicionando documentação da feature             | Gabriel Scheidt|
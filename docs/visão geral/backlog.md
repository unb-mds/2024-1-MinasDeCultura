# Histórias de usuário
| ID  | Eu, como        | Quero / Preciso / Devo / Gostaria de                                | Para                                                                                 | Must/Could |
|-----|-------------|--------------------------------------|-------------------------------------------------------------------------------------------|------------|
| US1 | Usuário     | Logar na plataforma                  | Manter os cadastros salvos                                                                | Could      |
| US2 | Usuário     | Filtrar entretenimento               | Ter uma ideia dos gastos de entretenimento                                                | Could       |
| US3 | Usuário     | Ter um dashboard informativo        | Facilitar a consulta e visualização dos dados de cada mês                                 | Must       |
| US4 | Usuário     | Receber notícias                     | Manter-se atualizado                                                                      | Could      |
| US5 | Usuário     | Filtrar por município e data        | Ter informações específicas de interesse                                                  | Must       |
| US6 | Usuário     | Selecionar modo noturno              | Aumentar acessibilidade                                                                   | Must       |
| US7 | Usuário     | Acessar via celular                  | Disponibilidade em várias plataformas                                                     | Must       |
| US8 | Usuário     | Modo alto contraste                  | Aumentar acessibilidade                                                                   | Must      |
| US9 | Servidor    | Disponibilidade 24 horas             | Estar sempre disponível                                                                   | Must       |
| US10| Usuário     | Acessar histórico de buscas          | Revisar pesquisas anteriores                                                              | Could      |
| US11| Usuário     | Receber recomendações de pesquisa   | Facilitar acesso a conteúdo                                                               | Could      |
| US12| Usuário     | Baixar conteúdo do dashboard        | Acesso offline                                                                            | Must     |
| US13| Gestor      | Acesso a planilhas de dados          | Tomar decisões assertivas                                                                 | Must       |
| US14| Usuário     | Consultar gastos com eventos culturais| Entender o apoio do governo à cultura na região                                           | Must       |
| US15| Usuário     | Acessar dados históricos de investimento| Analisar tendências e elaborar recomendações                                             | Must     |
| US16| Usuário     | Entender projetos financiados pelo estado| Elaborar propostas alinhadas com as prioridades do governo                               | Must      |
| US17| Usuário     | Saber como solicitar apoio financeiro| Desenvolver e apresentar projetos para um público mais amplo                                | Could      |


# Requisitos

## Requisitos Funcionais

|        |                                                                                                        |          |
|--------|--------------------------------------------------------------------------------------------------------|----------|
| RF01   | O sistema deve permitir que os usuários realizem login na plataforma utilizando credencias válidas     | US1      |
| RF02   | O sistema deve permitir que os usuários filtrem o tipo de entretenimento que desejam ver               | US2, US5 |
| RF03   | O sistema deve fornecer notícias relevantes na tela principal                                          | US4      |
| RF04   | O sistema deve permitir que os usuários acessem um histórico de buscas recentes                        | US10     |
| RF05   | O sistema deve oferecer a opção de download de conteúdo do dashboard                                   | US12     |
| RF06   | O sistema deve permitir que os usuários visualizem um dashboard com dados específicos de cada mês      | US3      |
| RF07   | O sistema deve permitir que os usuários recebam recomendações de pesquisa                              | US11     |
| RF08   | O sistema deve permitir que os usuários consultem os gastos do estado com eventos culturais específicos| US14     |
| RF09   | O sistema deve permitir que os usuários acessem dados históricos de investimentos em cultura           | US15     |
| RF10   | O sistema deve permitir que os usuários entendam quais tipos de projetos o estado tem financiado       | US16     |
| RF11   | O sistema deve fornecer informações sobre como solicitar apoio financeiro para projetos culturais      | US17     |

## Requisitos Não Funcionais

|        |                                                                                                    |          |
|--------|----------------------------------------------------------------------------------------------------|----------|
| RNF01  | O sistema deve garantir a segurança das informações de login dos usuários                          | US1      |
| RNF02  | O sistema deve estar disponível 24 horas por dia                                                   | US9      |
| RNF03  | O sistema deve ser acessível tanto em dispositivos móveis quanto em desktops                       | US7      |
| RNF04  | A interface de login deve ser intuitiva e de fácil compreensão                                     | US1      |
| RNF05  | O sistema deve ser compatível com os padrões de acessibilidade                                     | US8, US6 |
| RNF06  | O sistema deve garantir a privacidade dos dados dos usuários                                       | US1, US10|
| RNF07  | O sistema deve ser de fácil navegação e utilização                                                 | US2, US3, US4, US5, US7, US11, US14, US15, US16, US17|
| RNF08  | O sistema deve apresentar um tempo de resposta rápido para consultas e carregamento de dados       | US9, US3, US11, US14, US15, US16, US17|
| RNF09  | O sistema deve ser compatível com diferentes navegadores e sistemas operacionais                   | US7|
| RNF10  | O sistema deve ser robusto e escalável para lidar com um grande volume de usuários e dados         | US9, US13, US14, US15, US16, US17|
| RNF11  | A interface do sistema deve ser responsiva, adaptando-se a diferentes tamanhos de tela             | US7|

## Histórico de versão

| Versão |    Data    |                    Descrição                    |     Autor      |
|:------:|:----------:|:-----------------------------------------------:|:--------------:|
|  1.0   | 02/04/2024 | Adicionando história de usuários                | Gabriel Scheidt|
|  1.0   | 02/04/2024 | Adicionando histórico de versão                 | Gabriel Scheidt|
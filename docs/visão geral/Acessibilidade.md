# Acessibilidade

O objetivo do site é promover a cultura e informação para o público em geral, e isso significa ser acessível a todos, incluindo pessoas com deficiência visual, dificuldades de leitura ou outras condições que possam impactar a navegação em websites.
Um botão de acessibilidade permite que esses usuários adaptem a interface às suas necessidades, garantindo que possam interagir com o conteúdo de forma plena.
As funcionalidades do botão implementado foram desenvolvidas em conformidade com as [Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2](https://www.guia-wcag.com/).

## 1. Modo Escuro
- **Por que implementamos?** O Modo Escuro é uma preferência comum entre os usuários que navegam à noite ou em ambientes com pouca luz. 
- **Como funciona?** Ao ativar o Modo Escuro, o esquema de cores do site é invertido, mudando o fundo para tons mais escuros e o texto para tons mais claros. Isso melhora a leitura e a navegação em condições de pouca luz.
- **Normas WCAG:** Esta funcionalidade atende ao critério de sucesso **1.4.8 Apresentação Visual**.

## 2. Alto Contraste
- **Por que implementamos?** O Alto Contraste é essencial para usuários com deficiência visual, como daltonismo ou baixa visão, pois facilita a distinção entre diferentes elementos da página.
- **Como funciona?** Quando ativado, o Alto Contraste aumenta a diferença entre as cores de fundo e de primeiro plano. Isso torna o texto e os gráficos mais nítidos e legíveis.
- **Normas WCAG:** Esta funcionalidade atende ao critério de sucesso **1.4.3 Contraste (Mínimo)** e **1.4.6 Contraste Aprimorado**.

## 3. Aumentar Fonte
- **Por que implementamos?** Esta funcionalidade é crucial para usuários com dificuldades de visão que precisam de um tamanho de texto maior para uma leitura confortável.
- **Como funciona?** Ao clicar em "Aumentar Fonte", o tamanho do texto em todo o site é ampliado, facilitando a leitura sem a necessidade de zoom manual.
- **Normas WCAG:** Esta funcionalidade atende ao critério de sucesso **1.4.4 Redimensionamento do Texto**.

## 4. Fonte Original
- **Por que implementamos?** Esta opção permite que os usuários retornem ao tamanho de fonte padrão, caso tenham aumentado o texto anteriormente e desejem voltar à configuração original.
- **Como funciona?** Ao selecionar "Fonte Original", o tamanho do texto retorna ao padrão, ajustando-se automaticamente.
- **Normas WCAG:** Esta funcionalidade complementa o critério de sucesso **1.4.4 Redimensionamento do Texto** ao fornecer controle fácil sobre o tamanho da fonte.

# Como Aplicamos Acessibilidade
- **Desenvolvimento com React e Tailwind CSS:** Utilizamos React para o desenvolvimento dos componentes interativos e Tailwind CSS para o design responsivo e acessível. Essas tecnologias facilitam a implementação de temas dinâmicos e a adaptação da interface às necessidades dos usuários.
- **Testes de Acessibilidade:** Todas as funcionalidades foram testadas com leitores de tela para garantir que o site seja completamente navegável por pessoas com deficiência visual.

# Front-end do Projeto Minas de Cultura

Este diretório contém o código-fonte do front-end do projeto **Minas de Cultura**. O objetivo deste projeto é fornecer uma interface web amigável e intuitiva para os usuários, facilitando o acesso e a pesquisa de dados culturais.

## Tecnologias Utilizadas

- **Next.js**: Framework de React para renderização do lado do servidor e construção de aplicações web modernas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **React Datepicker**: Componente para seleção de datas.
- **Jest** e **React Testing Library**: Ferramentas de teste para garantir a qualidade do código.
- **Lucide-react**: Biblioteca de ícones para React.

## Estrutura de Pastas

Abaixo está uma visão geral da estrutura de pastas do front-end:

```
frontend/
├── public/          # Arquivos públicos como imagens e ícones
├── src/             # Código-fonte do projeto
│   ├── components/  # Componentes reutilizáveis do React
│   ├── app/         # Páginas da aplicação
│   ├── assets/      # imagens para utilização
│   ├── types/       # Padrões de arquivo
│   └── testes/      # Testes unitários e de integração
├── jest.config.js   # Configuração do Jest para testes
├── next.config.js   # Configuração do Next.js
└── tsconfig.json    # Configuração do TypeScript
```

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Git](https://git-scm.com/downloads) e o [Node.js](https://nodejs.org/en/download/) instalados em sua máquina.

### Passos para execução

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/unb-mds/2024-1-MinasDeCultura.git
   ```

2. **Acessar o diretório do front-end**

   ```bash
   cd 2024-1-MinasDeCultura/frontend
   ```

3. **Instalar as dependências**

   ```bash
   sudo npm i
   ```

4. **Iniciar o servidor de desenvolvimento**

   ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
   ```

   O servidor de desenvolvimento será iniciado e a aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Como Executar os Testes

Para garantir a qualidade do código, execute os testes unitários e de integração:

1. **Iniciar os testes**

   ```bash
   npm test
   ```

   Os testes serão executados automaticamente, verificando os componentes do front-end para garantir que estão funcionando conforme o esperado.

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

# Use uma imagem base de Node.js
FROM node:21.7

# Crie e defina o diretório de trabalho
WORKDIR /frontend

# Copie os arquivos de dependências
COPY front/package*.json ./

# Instale as dependências
RUN npm install

# Copie o código da aplicação
COPY front/ .

# Exponha a porta que o frontend usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
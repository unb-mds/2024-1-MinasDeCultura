# Use a imagem oficial do Node.js como base
FROM node:20.12.2

# Defina o diretório de trabalho
WORKDIR /backend

# Copie os arquivos de dependências do Node.js
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante do código da aplicação, incluindo o .env
COPY . .

# Execute o script principal da aplicação
CMD ["node", "src/index.js"]

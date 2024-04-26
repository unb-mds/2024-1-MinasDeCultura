## Protótipo de utilização da API do Querido Diário

Para fins de testes, desenvolvemos um protótipo de utilização da API do Querido Diário. Tínhamos dúvidas sobre como fazer as requisições e receber os dados, então optamos por criar um formulário. Nesse formulário, o usuário pode inserir um município (limitado aos municípios de Minas Gerais), um termo de busca e um intervalo de datas. Em seguida, o sistema realiza uma solicitação à API do Querido Diário com os parâmetros fornecidos.

Os dados retornados pela API são então renderizados na tela, possibilitando ao usuário visualizar todas as respostas obtidas. Essa abordagem nos permite testar a integração com a API e entender como os dados são estruturados, facilitando o desenvolvimento de futuras funcionalidades.

![Protótipo](https://github.com/unb-mds/2024-1-MinasDeCultura/blob/main/prototipo_form/image.png?raw=true)

## Como testar o protótipo?

Inicialmente, é preciso ter instalado em sua máquina o git e o node.js. Tendo os dois instalados, basta seguis o passo a passo abaixo:

### Clonar o repositório

```bash
git clone https://github.com/unb-mds/2024-1-MinasDeCultura.git
```

### Acessar o repositório

```bash
cd 2024-1-MinasDeCultura
```

### Mudar de branch

```bash
git checkout origin/prototipo_qd
```

### Acessar diretório do protótipo

```bash
cd prototipo_form
```

### Instalar dependências

```bash
npm i
```

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Após seguir esses passos, o servidor de desenvolvimento estará em execução e você poderá acessar o protótipo em seu navegador através do endereço fornecido pelo servidor. Certifique-se de testar todas as funcionalidades conforme necessário.

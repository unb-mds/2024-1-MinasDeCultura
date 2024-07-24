# Tutoria Scrapy

Este guia fornece instruções passo a passo para configurar e executar um spider Scrapy em uma máquina Linux, desde a instalação do Python até a execução de um spider.

## Pré-requisitos
- Python 3
- pip (gerenciador de pacotes para Python)
- venv (ferramenta para criar ambientes virtuais isolados)

## Passo 1: Instalação do Python

Verifique se o Python está instalado em seu sistema com o seguinte comando:

```bash
python3 --version
```

Se não estiver instalado, você pode instalá-lo usando:

```
sudo apt update
sudo apt install python3 python3-pip
```

## Passo 2: Instalação do Virtual Environment

Instale o pacote venv para gerenciar ambientes virtuais:

```
sudo apt install python3-venv
```

## Passo 3: Criação de um Ambiente Virtual
Recomenda-se criar na raíz do projeto para melhor administração. Exemplo:

```
python3 -m venv venv
```

## Passo 4: Ativação do Ambiente Virtual

Ative o ambiente virtual:
```
source venv/bin/activate
```

O prompt de comando deve mostrar (venv) indicando que o ambiente está ativado.

## Passo 5: Instalação do Scrapy

Com o ambiente virtual ativo, instale o Scrapy:

```
pip install scrapy
```

## Passo 6: Executar o Spider Scrapy

Navegue até o diretório do scrapy e execute o spider com:

```
cd webscrapy/minas_de_cultura_scrapy
```

Execução do crawler:
Os valores de ano foram definidos para funcionar entre 2022 até 2024 e os meses se iniciam sendo 01 até o 12.
```
scrapy crawl prototipo_spider -a ao=xx -a mes=xx
```

passando os parâmetros no final o resultado será armazenado como json em um arquivo nomeado resultado.

## Passo 7: Resultado da busca
Para vizualizar o resultado basta dar o comando:
```
cat resultado.json
```

## Passo 8: Desativação do Ambiente Virtual

Quando terminar, desative o ambiente virtual:
```
deactivate
```

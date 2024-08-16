# Tutorial Selenium

Este guia descreve como configurar e executar um script Selenium para coletar dados de um site e processá-los em formato CSV. Siga as instruções abaixo para garantir uma execução bem-sucedida.

## 1. Pré-requisitos
- **Python** instalado em sua máquina. Você pode baixá-lo em [python.org](https://www.python.org/).
- **pip** (gerenciador de pacotes do Python) instalado. Ele geralmente vem junto com o Python.
- selenium
- webdriver_manager

## 2. Instalando o Selenium

Para instalar o Selenium, abra o terminal ou o prompt de comando e execute o seguinte comando:

```bash
pip install selenium
```

## 3. Instalando o WebDriver

O Selenium precisa de um WebDriver para interagir com o navegador. Aqui estão os drivers para alguns dos navegadores mais populares:

- Chrome: [ChromeDriver](https://developer.chrome.com/docs/chromedriver/downloads?hl=pt-br).
- Firefox: [GeckoDriver](https://sourceforge.net/projects/geckodriver.mirror/).
- Edge: [EdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/?form=MA13LH).

Baixe o driver correspondente ao seu navegador e certifique-se de que ele esteja disponível no PATH do seu sistema.

## 4. Executar o Selenium

Certifique que você está na pasta correta antes de executar o projeto.

```
cd backend/Montes_claros_selenium
```

Execução do script: 

```
python montes_claros.py
```
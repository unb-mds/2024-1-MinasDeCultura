from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

# Define o caminho para o ChromeDriver
service = Service() 

# Configurações do navegador Chrome
options = webdriver.ChromeOptions()

# Inicializa o Chrome WebDriver com as opções definidas
driver = webdriver.Chrome(service=service, options=options)

# URL a ser acessada
url = 'https://transparenciapm.montesclaros.mg.gov.br/pronimtb/index.asp?acao=3&item=3'
driver.get(url)

# Espera para garantir que a página carregue completamente
time.sleep(10)  # Use explicit wait em produção

try:
    # Localiza o elemento <a> e obtém o texto
    gerar_element = driver.find_elements(By.TAG_NAME, 'input')
    gerar_text = gerar_element[6].text
    print(gerar_text)
except Exception as e:
    print(f"Erro ao localizar o elemento: {e}")

# Fecha o navegador
driver.quit()


import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def set_date_range(driver, start_date, end_date):
    """Função para definir o período nas caixas de data."""
    try:
        # Localiza os campos de data de início e fim pelos IDs
        start_date_input = driver.find_element(By.ID, "txtDataInicial")
        end_date_input = driver.find_element(By.ID, "txtDataFinal")

        # Limpa os campos antes de inserir as novas datas
        start_date_input.clear()
        end_date_input.clear()

        # Insere as datas nos campos correspondentes
        start_date_input.send_keys(start_date)
        end_date_input.send_keys(end_date)

        print(f"Período definido de {start_date} a {end_date}.")
    except Exception as e:
        print(f"Erro ao definir o período: {e}")


# Define o caminho para o ChromeDriver
service = Service()

#diretório de download
download_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'downloads')

# Crie o diretório de download se ele não existir
if not os.path.exists(download_dir):
    os.makedirs(download_dir)

# Configurações do navegador Chrome
options = webdriver.ChromeOptions()
prefs = {
    "download.default_directory": download_dir,  # Diretório de download
    "download.prompt_for_download": False,       # Não solicitar confirmação para download
    "download.directory_upgrade": True,          # Permitir upgrade do diretório
    "safebrowsing.enabled": True                 # Habilitar navegação segura
}
options.add_experimental_option("prefs", prefs)

# Inicializa o Chrome WebDriver com as opções definidas
driver = webdriver.Chrome(service=service, options=options)

# URL a ser acessada
url = 'https://transparenciapm.montesclaros.mg.gov.br/pronimtb/index.asp?acao=3&item=3'
driver.get(url)

try:
    # Espera até que a página carregue completamente
    wait = WebDriverWait(driver, 20)
    
    # Define o período desejado
    start_date = '01/02/2024'
    end_date = '20/02/2024'
    set_date_range(driver, start_date, end_date)
    
    # Espera até que o botão "Gerar" esteja presente e clicável
    gerar_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//input[@value='Gerar']")))
    gerar_button.click()
    print("Botão 'Gerar' clicado com sucesso.")
    
    # Espera até que a página carregue completamente após clicar em "Gerar"
    wait.until(EC.presence_of_element_located((By.ID, "btExportarCSV")))

    # Espera até que o botão "Exportar CSV" esteja presente e clicável
    exportar_csv_button = wait.until(EC.element_to_be_clickable((By.ID, "btExportarCSV")))
    
    # Verifica se o botão está visível na tela
    driver.execute_script("arguments[0].scrollIntoView();", exportar_csv_button)
    
    # Clica no botão "Exportar CSV"
    exportar_csv_button.click()
    print("Botão 'Exportar CSV' clicado com sucesso.")
    
    # Aguarda um tempo para garantir que o download seja concluído
    time.sleep(10)  # Ajuste conforme necessário
except Exception as e:
    print(f"Erro durante a execução do script: {e}")

# Fecha o navegador
driver.quit()
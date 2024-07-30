import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import shutil

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

def select_year(driver, year):
    """Função para selecionar o ano na caixa de seleção."""
    try:
        # Espera até que a caixa de seleção do ano esteja presente e visível
        year_select_element = WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.ID, "cmbAno"))
        )
        year_select = Select(year_select_element)
        
        # Verifica se o valor do ano está disponível nas opções
        options = [option.text for option in year_select.options]
        if year in options:
            year_select.select_by_visible_text(year)
            print(f"Ano {year} selecionado com sucesso.")
        else:
            print(f"Ano {year} não encontrado nas opções disponíveis.")
    except Exception as e:
        print(f"Erro ao selecionar o ano: {e}")

# Define o caminho para o ChromeDriver
service = Service()

# Define o diretório de download
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

    # Primeiro clique para tornar o campo de seleção do ano visível
    ano_button = wait.until(EC.element_to_be_clickable((By.ID, "cmbAno")))  # Substitua "ano_button_id" pelo ID real do elemento que exibe a seleção de ano
    ano_button.click()
    print("Botão para exibir seleção de ano clicado com sucesso.")
    
    # Anos e meses para iteração
    anos = ['2023', '2024']
    meses = [f'{i:02d}' for i in range(1, 13)]  # Gera uma lista ['01', '02', ..., '12']

    for ano in anos:
        # Seleciona o ano desejado
        select_year(driver, ano)
        
        for mes in meses:
            # Define o período desejado
            start_date = f'01/{mes}/{ano}'
            end_date = f'28/{mes}/{ano}'
            set_date_range(driver, start_date, end_date)
            
            # Espera até que o botão "Gerar" esteja presente e clicável
            gerar_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//input[@value='Gerar']")))
            gerar_button.click()
            print(f"Botão 'Gerar' clicado com sucesso para {mes}/{ano}.")
            
            # Espera até que a página carregue completamente após clicar em "Gerar"
            wait.until(EC.presence_of_element_located((By.ID, "btExportarCSV")))
            print("Página carregada após clicar em 'Gerar'.")
            # Espera até que o botão "Exportar CSV" esteja presente e clicável
            exportar_csv_button = wait.until(EC.element_to_be_clickable((By.ID, "btExportarCSV")))
            
            # Verifica se o botão está visível na tela
            driver.execute_script("arguments[0].scrollIntoView();", exportar_csv_button)
            
            # Clica no botão "Exportar CSV"
            exportar_csv_button.click()
            print(f"Botão 'Exportar CSV' clicado com sucesso para {mes}/{ano}.")
            
            # Aguarda um tempo para garantir que o download seja concluído
            time.sleep(5)  # Ajuste conforme necessário
            
            # Renomeia o arquivo baixado
            filename = max([f for f in os.listdir(download_dir)], key=lambda xa: os.path.getctime(os.path.join(download_dir, xa)))
            new_filename = f"montes_claros_{ano}_{mes}.csv"
            shutil.move(os.path.join(download_dir, filename), os.path.join(download_dir, new_filename))
            print(f"Arquivo renomeado para {new_filename}.")

            # Volta uma página para refazer a busca
            driver.back()
            time.sleep(2)  # Espera um pouco para garantir que a página anterior seja carregada
            print(f"Voltando à página de busca para o próximo período.")

            # Recarrega a página para garantir que esteja atualizada
            driver.refresh()
            time.sleep(2)  # Espera um pouco para garantir que a página seja recarregada
            select_year(driver, ano)  # Seleciona o ano novamente
            print("Página recarregada.")
            
except Exception as e:
    print(f"Erro durante a execução do script: {e}")

# Fecha o navegador
driver.quit()

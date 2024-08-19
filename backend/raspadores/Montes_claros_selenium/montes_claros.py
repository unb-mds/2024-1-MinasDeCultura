import os
import time
import subprocess
import json  # Certifique-se de importar o módulo json
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
        start_date_input = driver.find_element(By.ID, "txtDataInicial")
        end_date_input = driver.find_element(By.ID, "txtDataFinal")
        start_date_input.clear()
        end_date_input.clear()
        start_date_input.send_keys(start_date)
        end_date_input.send_keys(end_date)
        print(f"Período definido de {start_date} a {end_date}.")
    except Exception as e:
        print(f"Erro ao definir o período: {e}")

def select_year(driver, year):
    """Função para selecionar o ano na caixa de seleção."""
    try:
        year_select_element = WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.ID, "cmbAno"))
        )
        year_select = Select(year_select_element)
        options = [option.text for option in year_select.options]
        if year in options:
            year_select.select_by_visible_text(year)
            print(f"Ano {year} selecionado com sucesso.")
        else:
            print(f"Ano {year} não encontrado nas opções disponíveis.")
    except Exception as e:
        print(f"Erro ao selecionar o ano: {e}")

# Diretório de trabalho (onde o script está localizado)
working_dir = os.path.dirname(os.path.abspath(__file__))

# Configurações do navegador Chrome
options = webdriver.ChromeOptions()
prefs = {
    "download.default_directory": working_dir,  # Diretório de download configurado para o mesmo diretório do script
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
}
options.add_experimental_option("prefs", prefs)

# Inicializa o Chrome WebDriver com as opções definidas
service = Service()
driver = webdriver.Chrome(service=service, options=options)

# URL a ser acessada
url = 'https://transparenciapm.montesclaros.mg.gov.br/pronimtb/index.asp?acao=3&item=3'
driver.get(url)

try:
    wait = WebDriverWait(driver, 20)
    ano_button = wait.until(EC.element_to_be_clickable((By.ID, "cmbAno")))
    ano_button.click()
    print("Botão para exibir seleção de ano clicado com sucesso.")
    
    anos = ['2023', '2024']
    meses = [f'{i:02d}' for i in range(1, 13)]

    for ano in anos:
        select_year(driver, ano)
        
        for mes in meses:
            if mes == '02':
                start_date = f'01/{mes}/{ano}'
                end_date = f'28/{mes}/{ano}'
            else:
                start_date = f'01/{mes}/{ano}'
                end_date = f'30/{mes}/{ano}'
            
            set_date_range(driver, start_date, end_date)
            
            gerar_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//input[@value='Gerar']")))
            gerar_button.click()
            print(f"Botão 'Gerar' clicado com sucesso para {mes}/{ano}.")
            
            try:
                wait.until(EC.presence_of_element_located((By.ID, "btExportarCSV")))
                exportar_csv_button = wait.until(EC.element_to_be_clickable((By.ID, "btExportarCSV")))
                driver.execute_script("arguments[0].scrollIntoView();", exportar_csv_button)
                exportar_csv_button.click()
                print(f"Botão 'Exportar CSV' clicado com sucesso para {mes}/{ano}.")
                
                time.sleep(5)  # Aguarda o download ser concluído
                
                filename = max([f for f in os.listdir(working_dir) if f.endswith('.csv')], key=lambda xa: os.path.getctime(os.path.join(working_dir, xa)))
                new_filename = f"montes_claros_{ano}_{mes}.csv"
                shutil.move(os.path.join(working_dir, filename), os.path.join(working_dir, new_filename))
                print(f"Arquivo renomeado para {new_filename}.")
                
                # Chama o script de filtragem de dados
                subprocess.run(["python3", os.path.join(working_dir, "filtrar_csv.py")])
                
            except Exception as e:
                print(f"Nenhum dado encontrado para {mes}/{ano}. Adicionando entrada nula.")
                # Adiciona uma entrada nula para o mês que não possui dados
                with open(os.path.join(working_dir, 'despesas_montes_claros.json'), 'a', encoding='utf-8') as file:
                    json_data = [{
                        "Unidade administrativa": "Null",
                        "Valor empenhado": "Null",
                        "Valor liquidado": "Null",
                        "Valor pago": "Null",
                        "ano": ano[-2:],
                        "mes": mes
                    }]
                    json.dump(json_data, file, ensure_ascii=False, indent=4)
            
            finally:
                # Remova o arquivo CSV se ele existir
                if os.path.exists(os.path.join(working_dir, new_filename)):
                    os.remove(os.path.join(working_dir, new_filename))
                    print(f"Arquivo CSV {new_filename} excluído.")
            
            driver.back()
            time.sleep(2)
            driver.refresh()
            time.sleep(2)
            select_year(driver, ano)
            print("Página recarregada.")
            
except Exception as e:
    print(f"Erro durante a execução do script: {e}")

finally:
    driver.quit()

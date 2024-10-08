import time
import os
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException, NoSuchElementException

# Configurações do navegador Chrome
options = webdriver.ChromeOptions()
prefs = {
    "download.default_directory": os.getcwd(),  # Diretório de download configurado para o mesmo diretório do script
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
}
options.add_experimental_option("prefs", prefs)

# Inicializa o Chrome WebDriver com as opções definidas
service = Service()
driver = webdriver.Chrome(service=service, options=options)

# URL a ser acessada
url = 'https://www.transparencia.mg.gov.br/despesa-estado/despesa/despesa-orgaos/2024/01-01-2024/31-12-2024/4538'
driver.get(url)

# Mapeamento de meses para números
meses_numeros = {
    "Janeiro": "01",
    "Fevereiro": "02",
    "Março": "03",
    "Abril": "04",
    "Maio": "05",
    "Junho": "06",
    "Julho": "07",
    "Agosto": "08",
    "Setembro": "09",
    "Outubro": "10",
    "Novembro": "11",
    "Dezembro": "12"
}

def obter_mes_ano_atual(driver):
    return driver.find_element(By.CLASS_NAME, "ui-datepicker-title").text

def selecionar_mes_ano(driver, mes_nome, ano):
    # Tenta avançar para o final da esquerda
    for _ in range(12):  # Limite de 12 tentativas para evitar loops infinitos
        mes_ano_texto = obter_mes_ano_atual(driver)
        
        if f"{mes_nome}" in mes_ano_texto and f"{ano}" in mes_ano_texto:
            return
        
        try:
            mes_ano_antes = mes_ano_texto
            driver.find_element(By.CLASS_NAME, "ui-datepicker-next").click()
            time.sleep(1)
            mes_ano_depois = obter_mes_ano_atual(driver)
            
            if mes_ano_antes == mes_ano_depois:
                raise Exception("Mês não mudou ao tentar ir para a esquerda.")
                
        except Exception as e:
            print(f"Erro ao tentar ir para a esquerda: {e}. Tentando para a direita.")
            break  # Saia do loop e tente para a direita

    # Caso não encontre o mês, tenta avançar para o final da direita
    for _ in range(12):
        mes_ano_texto = obter_mes_ano_atual(driver)
        
        if f"{mes_nome}" in mes_ano_texto and f"{ano}" in mes_ano_texto:
            return
        
        try:
            mes_ano_antes = mes_ano_texto
            driver.find_element(By.CLASS_NAME, "ui-datepicker-prev").click()
            time.sleep(1)
            mes_ano_depois = obter_mes_ano_atual(driver)
            
            if mes_ano_antes == mes_ano_depois:
                raise Exception("Mês não mudou ao tentar ir para a direita.")
                
        except Exception as e:
            print(f"Erro ao tentar ir para a direita: {e}. Tentando para a esquerda.")
            break  # Saia do loop e tente para a esquerda novamente

try:
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "a.btn.btn-red"))
    )
    
    botao_pesquisa_avancada = driver.find_element(By.CSS_SELECTOR, "a.btn.btn-red")
    botao_pesquisa_avancada.click()
    
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "jform_ano"))
    )
    dados = []

    for ano in range(2002, 2025):
        select_ano = driver.find_element(By.ID, "jform_ano")
        select_ano.click()
        select_ano.find_element(By.XPATH, f"//option[@value='{ano}']").click()
        
        for mes_nome in meses_numeros.keys():
            campo_fim = driver.find_element(By.ID, "jform_datafim")
            campo_fim.click()
            time.sleep(2)
            
            selecionar_mes_ano(driver, mes_nome, ano)
            
            try:
                driver.find_element(By.XPATH, "//a[text()='31']").click()
            except NoSuchElementException:
                driver.find_elements(By.XPATH, "//td[@data-handler='selectDay']/a")[-1].click()
            
            campo_inicio = driver.find_element(By.ID, "jform_datainicio")
            campo_inicio.click()
            time.sleep(2)
            
            selecionar_mes_ano(driver, mes_nome, ano)
            
            dia_1_link = driver.find_element(By.XPATH, "//td[not(contains(@class, 'ui-datepicker-other-month'))]//a[text()='1']")
            driver.execute_script("arguments[0].click();", dia_1_link)
            
            if mes_nome == "Janeiro":
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, "jform_ID_ORGAO_chosen"))
                )
                campo_de_entrada = driver.find_element(By.ID, "jform_ID_ORGAO_chosen")
                time.sleep(2)
                campo_de_entrada.click()
                
                WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.CLASS_NAME, "chosen-drop"))
                )

                try:
                    opcao_cultura = driver.find_element(By.XPATH, "//ul[contains(@class, 'chosen-results')]//li[contains(text(), 'Secretaria De Estado De Cultura')]")
                    opcao_cultura.click()
                except StaleElementReferenceException:
                    WebDriverWait(driver, 10).until(
                        EC.visibility_of_element_located((By.CLASS_NAME, "chosen-drop"))
                    )
                    opcao_cultura = driver.find_element(By.XPATH, "//ul[contains(@class, 'chosen-results')]//li[contains(text(), 'Secretaria De Estado De Cultura')]")
                    opcao_cultura.click()
            
            try:
                WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.ID, "jform_check__orgao"))
                )
                checkbox = driver.find_element(By.ID, "jform_check__orgao")
                
                driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
                if not checkbox.is_selected():
                    checkbox.click()
            except StaleElementReferenceException:
                WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.ID, "jform_check__orgao"))
                )
                checkbox = driver.find_element(By.ID, "jform_check__orgao")
                
                driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
                if not checkbox.is_selected():
                    checkbox.click()
            
            try:
                botao_pesquisar = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-red")
                botao_pesquisar.click()
            except StaleElementReferenceException:
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "button.btn.btn-red"))
                )
                botao_pesquisar = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-red")
                botao_pesquisar.click()
            
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "table"))
            )
            
            driver.execute_script("window.scrollBy(0, 500);")
            time.sleep(2)

            tabela_linhas = driver.find_elements(By.CSS_SELECTOR, "tr.odd")
            
            for linha in tabela_linhas:
                cols = linha.find_elements(By.TAG_NAME, "td")
                dados.append({
                    "orgao": cols[0].text,
                    "Valor Empenhado": cols[1].text,
                    "Valor Liquidado": cols[2].text,
                    "Valor Pago": cols[3].text,
                    "Ano": str(ano),
                    "Mes": meses_numeros[mes_nome]  # Substitui o nome do mês pelo número correspondente
                })

            time.sleep(2)
            caminho_arquivo_json = os.path.join(os.getcwd(), 'selenium_portal_transparencia_meses.json')
            with open(caminho_arquivo_json, 'w') as arquivo_json:
                json.dump(dados, arquivo_json, indent=4, ensure_ascii=False)
        
    

finally:
    driver.quit()

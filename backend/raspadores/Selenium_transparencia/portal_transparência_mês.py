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

# Lista de meses em ordem
meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

def obter_mes_ano_atual(driver):
    return driver.find_element(By.CLASS_NAME, "ui-datepicker-title").text

try:
    # Espera até que o botão "Pesquisa Avançada" esteja presente na página
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "a.btn.btn-red"))
    )
    
    # Encontra o botão "Pesquisa Avançada" e clica nele
    botao_pesquisa_avancada = driver.find_element(By.CSS_SELECTOR, "a.btn.btn-red")
    botao_pesquisa_avancada.click()
    
    # Aguarda a página carregar, onde os campos de seleção estão presentes
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "jform_ano"))
    )
    dados = []

    # Loop para selecionar o ano de 2005 até o ano atual (2024)
    for ano in range(2005, 2025):
        # Encontra o dropdown pelo ID e cria um objeto Select para o ano
        select_ano = driver.find_element(By.ID, "jform_ano")
        
        # Seleciona o ano desejado pelo valor
        select_ano.click()
        select_ano.find_element(By.XPATH, f"//option[@value='{ano}']").click()
        
        # Loop para selecionar cada mês do ano
        for mes_nome in meses:
            # Seleciona o campo "Fim" e define a data final primeiro
            campo_fim = driver.find_element(By.ID, "jform_datafim")
            campo_fim.click()
            time.sleep(2)
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ui-datepicker-title"))
            )

            # Armazena o mês/ano atual antes de clicar no botão "Próximo"
            mes_ano_atual = obter_mes_ano_atual(driver)

            while True:
                # Obtém o texto do mês e ano atual no calendário
                mes_ano_texto_fim = obter_mes_ano_atual(driver)
                
                # Verifica se o mês/ano atual corresponde ao desejado
                if f"{mes_nome}" in mes_ano_texto_fim and f"{ano}" in mes_ano_texto_fim:
                    break
                
                # Tenta avançar para o próximo mês
                driver.find_element(By.CLASS_NAME, "ui-datepicker-prev").click()
                time.sleep(1)
                
                # Verifica se o mês mudou após clicar em "Próximo"
                novo_mes_ano = obter_mes_ano_atual(driver)
                if novo_mes_ano == mes_ano_atual:
                    # Se o mês não mudou, clica no botão "Voltar"
                    driver.find_element(By.CLASS_NAME, "ui-datepicker-next").click()
                    time.sleep(1)
                
                # Atualiza o mês/ano atual
                mes_ano_atual = novo_mes_ano
            
            # Seleciona o último dia do mês (ajustar conforme necessário)
            try:
                driver.find_element(By.XPATH, "//a[text()='31']").click()
            except NoSuchElementException:
                # Em meses com menos de 31 dias, seleciona o último dia disponível
                driver.find_elements(By.XPATH, "//td[@data-handler='selectDay']/a")[-1].click()
            
            # Seleciona o campo "Início" e define a data inicial após a final
            campo_inicio = driver.find_element(By.ID, "jform_datainicio")
            campo_inicio.click()
            time.sleep(2)
            # Aguarda a presença do calendário e navega até o mês/ano desejado
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ui-datepicker-title"))
            )
            
            while True:
                # Obtém o texto do mês e ano atual no calendário
                mes_ano_texto = driver.find_element(By.CLASS_NAME, "ui-datepicker-title").text
                
                # Verifica se o mês/ano atual corresponde ao desejado
                if f"{mes_nome}" in mes_ano_texto and f"{ano}" in mes_ano_texto:
                    break
                
                # Avança para o próximo mês
                driver.find_element(By.CLASS_NAME, "ui-datepicker-next").click()
                time.sleep(1)
            time.sleep(5)
            # Seleciona o dia 1º
            driver.find_element(By.XPATH, "//a[text()='1']").click()
            
            # Resto do seu código para selecionar o órgão, marcar checkbox, etc.
            campo_de_entrada = driver.find_element(By.ID, "jform_ID_ORGAO_chosen")
            time.sleep(3)
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
            time.sleep(5)

            tabela_linhas = driver.find_elements(By.CSS_SELECTOR, "tr.odd")
            
            for linha in tabela_linhas:
                cols = linha.find_elements(By.TAG_NAME, "td")
                dados.append({
                    "Órgão": cols[0].text,
                    "Valor Empenhado": cols[1].text,
                    "Valor Liquidado": cols[2].text,
                    "Valor Pago": cols[3].text,
                    "Ano": str(ano),
                    "Mês": mes_nome
                })

            time.sleep(8)
    
    caminho_arquivo_json = os.path.join(os.getcwd(), 'resultado.json')
    with open(caminho_arquivo_json, 'w') as arquivo_json:
        json.dump(dados, arquivo_json, indent=4, ensure_ascii=False)

finally:
    driver.quit()

import time
import os
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import StaleElementReferenceException

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
url = 'https://www.transparencia.mg.gov.br/despesa-estado/despesa/despesa-orgaos/2024/01-01-2024/31-12-2024/4538'
driver.get(url)

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
        # Encontra o dropdown pelo ID e cria um objeto Select
        select_ano = Select(driver.find_element(By.ID, "jform_ano"))
        
        # Seleciona o ano desejado pelo valor
        select_ano.select_by_value(str(ano))
        
        # Aguarda a presença do dropdown e clica nele para abrir
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "jform_ID_ORGAO_chosen"))
        )
        campo_de_entrada = driver.find_element(By.ID, "jform_ID_ORGAO_chosen")
        time.sleep(3)
        campo_de_entrada.click()
        
        # Aguarda a presença do dropdown visível e localiza a lista de opções
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CLASS_NAME, "chosen-drop"))
        )
        
        # Encontra e clica na opção "Secretaria De Estado De Cultura"
        try:
            opcao_cultura = driver.find_element(By.XPATH, "//ul[contains(@class, 'chosen-results')]//li[contains(text(), 'Secretaria De Estado De Cultura')]")
            opcao_cultura.click()
        except StaleElementReferenceException:
            # Tenta encontrar e clicar na opção novamente se o elemento se tornar obsoleto
            WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.CLASS_NAME, "chosen-drop"))
            )
            opcao_cultura = driver.find_element(By.XPATH, "//ul[contains(@class, 'chosen-results')]//li[contains(text(), 'Secretaria De Estado De Cultura')]")
            opcao_cultura.click()

        # Aguarda o checkbox ficar visível e clica nele
        try:
            WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.ID, "jform_check__orgao"))
            )
            checkbox = driver.find_element(By.ID, "jform_check__orgao")
            
            # Usa JavaScript para garantir que o checkbox seja clicável
            driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
            if not checkbox.is_selected():
                checkbox.click()
        except StaleElementReferenceException:
            # Reencontra o checkbox se a referência se tornar obsoleta
            WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.ID, "jform_check__orgao"))
            )
            checkbox = driver.find_element(By.ID, "jform_check__orgao")
            
            driver.execute_script("arguments[0].scrollIntoView(true);", checkbox)
            if not checkbox.is_selected():
                checkbox.click()
        
        # Localiza o botão "Pesquisar" e clica nele
        try:
            botao_pesquisar = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-red")
            botao_pesquisar.click()
        except StaleElementReferenceException:
            # Tenta encontrar e clicar no botão novamente se o elemento se tornar obsoleto
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "button.btn.btn-red"))
            )
            botao_pesquisar = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-red")
            botao_pesquisar.click()
        
        # Aguarda a tabela carregar
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "table"))
        )
        
        # Role para baixo até a tabela
        driver.execute_script("window.scrollBy(0, 500);")
        
        # Aguarda os dados da tabela serem carregados
        time.sleep(5)

        # Extrai dados da tabela
        tabela_linhas = driver.find_elements(By.CSS_SELECTOR, "tr.odd")
        
        for linha in tabela_linhas:
            cols = linha.find_elements(By.TAG_NAME, "td")
            dados.append({
                "Órgão": cols[0].text,
                "Valor Empenhado": cols[1].text,
                "Valor Liquidado": cols[2].text,
                "Valor Pago": cols[3].text,
                "Ano": str(ano),
            })

        # Espera antes de continuar o loop (ajuste conforme necessário)
        time.sleep(8)
    
    # Salva os dados em um arquivo JSON no diretório de trabalho
    caminho_arquivo_json = os.path.join(working_dir, 'resultado.json')
    with open(caminho_arquivo_json, 'w') as arquivo_json:
        json.dump(dados, arquivo_json, indent=4, ensure_ascii=False)

finally:
    # Fecha o navegador
    driver.quit()

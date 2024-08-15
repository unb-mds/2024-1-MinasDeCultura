import requests
from bs4 import BeautifulSoup
import json
import os

# URL da página de notícias
url = 'https://www.secult.mg.gov.br/'

# Cabeçalhos de requisição
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Fazendo a requisição para obter o conteúdo da página
response = requests.get(url, headers=headers)

# Verificando se a requisição foi bem-sucedida
if response.status_code == 403:
    print("Acesso negado pelo servidor (403 Forbidden).")
elif response.status_code != 200:
    print(f"Erro ao acessar a página: {response.status_code}")
else:
    html_content = response.content

    # Parsing do conteúdo HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Selecionando todas as notícias
    news_items = soup.select('.tc_latestnews .tc_column_3')

    # Verificando se encontrou os itens de notícias
    if not news_items:
        print("Nenhum item de notícia encontrado.")
    else:
        print(f"Encontrados {len(news_items)} itens de notícia.")

    # Lista para armazenar as notícias extraídas
    novas_noticias = []

    # Extraindo informações de cada notícia
    for item in news_items:
        link = item.find('a', itemprop='url')['href']
        img_url = item.find('img')['src']
        title = item.find('span', itemprop='name').text.strip()

        # Armazenando os dados extraídos em um dicionário
        novas_noticias.append({
            'link': link,
            'image_url': img_url,
            'title': title
        })

    # Definindo o caminho do diretório baseado na localização do script
    diretorio_atual = os.path.dirname(os.path.abspath(__file__))
    diretorio_destino = os.path.join(diretorio_atual, '../front/public/data/')
    
    # Criando o diretório se não existir
    os.makedirs(diretorio_destino, exist_ok=True)
    
    # Definindo o caminho completo para o arquivo JSON
    arquivo_json = os.path.join(diretorio_destino, 'novas_noticias.json')

    # Salvando os dados em um arquivo JSON
    with open(arquivo_json, 'w', encoding='utf-8') as f:
        json.dump(novas_noticias, f, ensure_ascii=False, indent=4)

    print(f"Dados das notícias extraídos e salvos em '{arquivo_json}'.")

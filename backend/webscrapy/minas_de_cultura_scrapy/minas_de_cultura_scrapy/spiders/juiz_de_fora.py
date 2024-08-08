import scrapy
import pdfplumber
import json
import os

class JuizDeForaSpider(scrapy.Spider):
    name = 'juiz_de_fora'

    custom_settings = {
        'RETRY_TIMES': 3,  # Tenta novamente 3 vezes em caso de falha
        'DOWNLOAD_TIMEOUT': 120,  # Tempo limite de 30 segundos para download
        'DOWNLOAD_DELAY': 5,  # Espera 2 segundos entre cada requisição
    }
    
    def __init__(self, *args, **kwargs):
        super(JuizDeForaSpider, self).__init__(*args, **kwargs)
        self.anos = ['22', '23', '24']
        self.meses = [str(mes).zfill(2) for mes in range(1, 13)]
        self.failed_urls = []  # Lista para armazenar os URLs que falharam
    
    def start_requests(self):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'TE': 'Trailers',
        }

        for ano in self.anos:
            for mes in self.meses:
                url = f'http://www.pjf.mg.gov.br/transparencia/despesas_publicas/mensal_consolidada/arquivos/pdf/{ano}{mes}.pdf'
                yield scrapy.Request(url, headers=headers, callback=self.parse, cb_kwargs={'ano': ano, 'mes': mes}, errback=self.errback_httpbin)
    
    def errback_httpbin(self, failure):
        self.log(f'Request failed: {failure.request.url}')
        self.failed_urls.append(failure.request.url)
    
    def parse(self, response, ano, mes):
        if response.status == 200:
            self.log(f'Successfully accessed the PDF: {response.url}')
            path = f'despesas_{ano}{mes}.pdf'
            with open(path, 'wb') as f:
                f.write(response.body)
            self.log(f'Successfully downloaded the PDF to {path}')
            self.process_pdf(path, ano, mes)
        else:
            self.log(f'Failed to access the PDF: {response.url} with status code {response.status}')
            self.failed_urls.append(response.url)

    def process_pdf(self, path, ano, mes):
        try:
            with pdfplumber.open(path) as pdf:
                first_page = pdf.pages[0]
                table = first_page.extract_table()
                if table:
                    data = []
                    headers = table[0]
                    keywords = {
                        "FUNALFA": "Fundação Cultural Alfredo Ferreira Lage",
                        "SETUR": "Secretaria de Turismo",
                        "FUMAPE": "Fundo Municipal de Apoio ao Esporte",
                        "FUMTUR": "Fundo Municipal de Turismo",
                        "FMC": "Fundo Municipal de Cultura",
                        "MAPRO": "Manutenção de Programas"
                    }
                    for row in table[1:]:
                        for keyword, full_name in keywords.items():
                            if keyword in row[0]:
                                entry = {
                                    "Sigla": keyword,
                                    "Unidade administrativa": full_name,
                                    "Valor empenhado": row[2],
                                    "Valor liquidado": row[3],
                                    "Valor pago": row[4],
                                    "ano": ano,
                                    "mes": mes
                                }
                                data.append(entry)
                    
                    # Save data as JSON
                    json_path = 'despesas.json'
                    if os.path.exists(json_path):
                        with open(json_path, 'r', encoding='utf-8') as json_file:
                            existing_data = json.load(json_file)
                    else:
                        existing_data = []

                    existing_data.extend(data)

                    with open(json_path, 'w', encoding='utf-8') as json_file:
                        json.dump(existing_data, json_file, ensure_ascii=False, indent=4)
                    self.log(f'Successfully saved data to {json_path}')
        except Exception as e:
            self.log(f'Error processing PDF: {e}')

        # Clean up the downloaded PDF
        os.remove(path)
    
    def closed(self, reason):
        # Tentando novamente os URLs que falharam
        if self.failed_urls:
            self.log(f'Retrying {len(self.failed_urls)} failed URLs...')
            for url in self.failed_urls:
                yield scrapy.Request(url, callback=self.parse, errback=self.errback_httpbin)

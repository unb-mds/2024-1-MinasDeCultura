import scrapy
import pdfplumber
import json
import os

class JuizDeForaSpider(scrapy.Spider):
    name = 'juiz_de_fora'

    def __init__(self, ano=None, mes=None, *args, **kwargs):
        super(JuizDeForaSpider, self).__init__(*args, **kwargs)
        if ano is None or mes is None:
            raise ValueError("Ano e mês devem ser fornecidos")
        if not (20 <= int(ano) <= 24):
            raise ValueError("Ano deve estar entre 20 e 24")
        if not (1 <= int(mes) <= 12):
            raise ValueError("Mês deve estar entre 1 e 12")

        self.ano = ano
        self.mes = mes.zfill(2)
        self.start_urls = [f'http://www.pjf.mg.gov.br/transparencia/despesas_publicas/mensal_consolidada/arquivos/pdf/{ano}{self.mes}.pdf']

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
        yield scrapy.Request(self.start_urls[0], headers=headers, callback=self.parse)

    def parse(self, response):
        if response.status == 200:
            self.log(f'Successfully accessed the PDF: {response.url}')
            path = f'despesas_{self.ano}{self.mes}.pdf'
            with open(path, 'wb') as f:
                f.write(response.body)
            self.log(f'Successfully downloaded the PDF to {path}')
            self.process_pdf(path)
        else:
            self.log(f'Failed to access the PDF: {response.url} with status code {response.status}')

    def process_pdf(self, path):
        try:
            with pdfplumber.open(path) as pdf:
                first_page = pdf.pages[0]
                table = first_page.extract_table()
                if table:
                    data = []
                    headers = table[0]
                    for row in table[1:]:
                        if "FUNALFA" in row[0]:
                            entry = {
                                "Sigla": "FUNALFA",
                                "Unidade administrativa": "Fundação Cultural Alfredo Ferreira Lage",
                                "Valor empenhado": row[2],
                                "Valor liquidado": row[3],
                                "Valor pago": row[4],
                                "ano": self.ano,
                                "mes": self.mes
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

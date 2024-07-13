
import scrapy
import pdfplumber
from io import BytesIO
from scrapy.http import Request

class PoderExecutivoSpider(scrapy.Spider):
    name = 'prototipo_spider'
    allowed_domains = ['abadiadosdourados.mg.gov.br']
    start_urls = ['https://abadiadosdourados.mg.gov.br/IOM/iom10.pdf']

    def parse(self, response):
        # Utiliza pdfplumber para extrair texto do PDF
        with pdfplumber.open(BytesIO(response.body)) as pdf:
            total_pages = len(pdf.pages)
            all_occurrences = []

            for i in range(total_pages):
                page = pdf.pages[i]
                text = page.extract_text()
                if "PODER EXECUTIVO" in text:
                    occurrences = text.count("PODER EXECUTIVO")
                    all_occurrences.append({
                        'page': i + 1,
                        'occurrences': occurrences,
                        'text_snippets': [line for line in text.split('\n') if "PODER EXECUTIVO" in line]
                    })

        for item in all_occurrences:
            yield item


# class ValorRepasseSpider(scrapy.Spider):
#     name = 'prototipo_spider'
#     allowed_domains = ['pjf.mg.gov.br']
#     start_urls = ['https://www.pjf.mg.gov.br/e_atos/e_atos_vis.php?id=103038']

#     def parse(self, response):
#         # Extrair o texto inteiro da página
#         text = response.xpath('//text()').getall()
#         full_text = ' '.join(text)

#         # Procurar pela frase específica
#         target_phrase = 'VALOR DO REPASSE: R$ 15.000,00 (quinze mil reais)'
#         count = full_text.count(target_phrase)

#         # Retornar o resultado
#         yield {
#             'url': response.url,
#             'phrase': target_phrase,
#             'count': count
#         }

import scrapy
import re  # Importando regex para limpeza do texto extraído

class JuizDeForaSpiderSpider(scrapy.Spider):
    name = "juiz_de_fora_spider"
    allowed_domains = ["www.pjf.mg.gov.br"]
    start_urls = ["https://www.pjf.mg.gov.br/e_atos/e_atos.php"]

    def parse(self, response):
        # Seleciona todos os links 'Leia Mais' e segue cada um
        for link in response.css('a.ato_leia_mais::attr(href)'):
            yield response.follow(link.get(), self.parse_document)

    def parse_document(self, response):
        # Extrai o texto que contém 'Valor Global'
        texto_valor = response.xpath("//text()[contains(., 'Valor Global')]").get()
        if texto_valor:
            # Limpa o texto e extrai o valor monetário
            valor = re.search(r'R\$[\s]*[\d.,]+', texto_valor)
            if valor:
                valor = valor.group().replace(' ', '')  # Remove espaços em branco no valor
                yield {
                    'valor': valor
                }
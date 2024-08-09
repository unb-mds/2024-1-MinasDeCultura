import os
import pandas as pd
import json

def processar_arquivo_csv(caminho_arquivo, ano, mes):
    try:
        # Lê o CSV pulando as primeiras 4 linhas que contêm metadados, usando codificação 'latin1'
        df = pd.read_csv(caminho_arquivo, encoding='latin1', delimiter=';', skiprows=4)
    except Exception as e:
        print(f"Erro ao ler o arquivo {caminho_arquivo}: {e}")
        return None

    # Remover aspas e sinais de igual das colunas e dados
    df.columns = df.columns.str.replace('="', '').str.replace('"', '').str.strip()
    df = df.apply(lambda x: x.str.replace('="', '').str.replace('"', '').str.strip() if x.dtype == "object" else x)

    # Exibe as colunas disponíveis para verificação
    print(f"Colunas encontradas no CSV: {df.columns.tolist()}")

    # Verifica se as colunas necessárias estão presentes
    colunas_necessarias = ['Descrição', 'No Período - Valor Empenhado', 'No Período - Valor Liquidado', 'No Período - Valor Pago']
    if not set(colunas_necessarias).issubset(df.columns):
        print(f"As colunas necessárias não foram encontradas no arquivo {caminho_arquivo}.")
        return None

    # Lista de unidades administrativas de interesse
    unidades_interesse = [
        "Desenvolvimento do Desporto e Lazer",
        "Desenvolvimento do Turismo",
        "PROMOÇÃO DO ESPORTE",
        "Promoções culturais"
    ]

    # Filtra as linhas que contenham as unidades de interesse na coluna 'Descrição'
    filtro = df[df['Descrição'].str.contains('|'.join(unidades_interesse), case=False, na=False)]

    if filtro.empty:
        print(f"Nenhuma linha relevante encontrada para {mes}/{ano}.")
        return None

    # Seleciona as colunas de interesse
    filtro = filtro[['Descrição', 'No Período - Valor Empenhado', 'No Período - Valor Liquidado', 'No Período - Valor Pago']]

    # Renomeia as colunas para o formato desejado
    filtro = filtro.rename(columns={
        'Descrição': 'Unidade administrativa',
        'No Período - Valor Empenhado': 'Valor empenhado',
        'No Período - Valor Liquidado': 'Valor liquidado',
        'No Período - Valor Pago': 'Valor pago'
    })

    # Formata o ano para o formato desejado
    ano_formatado = ano[-2:]

    # Adiciona as colunas de 'ano' e 'mes'
    filtro['ano'] = ano_formatado
    filtro['mes'] = mes

    # Reseta o índice para organizar os dados
    filtro = filtro.reset_index(drop=True)

    # Converte para uma lista de dicionários
    dados_json = filtro.to_dict(orient='records')

    return dados_json

def salvar_dados_json(dados, diretorio, ano, mes):
    # Caminho para o arquivo JSON
    json_filename = 'despesas_montes_claros.json'
    json_path = os.path.join(diretorio, json_filename)

    # Se o arquivo já existe, carrega os dados existentes
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as file:
            dados_existentes = json.load(file)
    else:
        dados_existentes = []

    # Adiciona os novos dados aos existentes, mesmo que sejam "nulos"
    if not dados:
        dados = [{
            "Unidade administrativa": "Null",
            "Valor empenhado": "Null",
            "Valor liquidado": "Null",
            "Valor pago": "Null",
            "ano": ano[-2:],
            "mes": mes,
            "cidade": "Montes Claros"
        }]
    else:
        # Adiciona a cidade "Montes Claros" a cada item
        for item in dados:
            item["cidade"] = "Montes Claros"

    dados_existentes.extend(dados)

    # Salva todos os dados juntos em JSON
    with open(json_path, 'w', encoding='utf-8') as file:
        json.dump(dados_existentes, file, ensure_ascii=False, indent=4)
    print(f"Dados atualizados salvos em {json_path}")

if __name__ == "__main__":
    # Diretório de trabalho (onde o script está localizado)
    diretorio = os.path.dirname(os.path.abspath(__file__))

    # Lista de arquivos CSV no diretório
    arquivos_csv = [f for f in os.listdir(diretorio) if f.endswith('.csv')]

    if not arquivos_csv:
        print("Nenhum arquivo CSV encontrado no diretório.")
    else:
        for arquivo_csv in arquivos_csv:
            caminho_arquivo_csv = os.path.join(diretorio, arquivo_csv)
            
            # Extrai ano e mês do nome do arquivo, assumindo o formato 'montes_claros_ano_mes.csv'
            try:
                partes_nome = arquivo_csv.replace('.csv', '').split('_')
                ano = partes_nome[2]
                mes = partes_nome[3]
            except IndexError:
                print(f"Nome do arquivo {arquivo_csv} não está no formato esperado.")
                continue

            print(f"Processando arquivo: {arquivo_csv} para ano {ano} e mês {mes}")
            dados_filtrados = processar_arquivo_csv(caminho_arquivo_csv, ano, mes)

            # Salva os dados filtrados em um único arquivo JSON
            salvar_dados_json(dados_filtrados, diretorio, ano, mes)

            # Remove o arquivo CSV após o processamento
            os.remove(caminho_arquivo_csv)
            print(f"Arquivo CSV {arquivo_csv} excluído.")

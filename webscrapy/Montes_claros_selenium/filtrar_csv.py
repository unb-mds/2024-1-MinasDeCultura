import os
import pandas as pd
import json

def processar_arquivos_csv(diretorio):
    if not os.path.exists(diretorio):
        print(f"O diretório {diretorio} não existe.")
        return

    arquivos_csv = [f for f in os.listdir(diretorio) if f.endswith('.csv')]
    
    if not arquivos_csv:
        print(f"Não há arquivos CSV no diretório {diretorio}.")
        return

    todos_os_dados = []

    for arquivo in arquivos_csv:
        caminho_arquivo = os.path.join(diretorio, arquivo)
        
        try:
            # Ignora as primeiras 4 linhas e tenta ler o arquivo com diferentes delimitadores e codificações
            df = pd.read_csv(caminho_arquivo, encoding='utf-8', delimiter=';', skiprows=4, on_bad_lines='skip')
        except UnicodeDecodeError:
            try:
                df = pd.read_csv(caminho_arquivo, encoding='latin1', delimiter=';', skiprows=4, on_bad_lines='skip')
            except Exception as e:
                print(f"Erro ao ler o arquivo {arquivo}: {e}")
                continue
        
        print(f"Primeiras linhas do arquivo {arquivo} após ignorar 4 linhas:")
        print(df.head())

        print(f"Colunas no arquivo {arquivo}: {df.columns.tolist()}")
        
        # Verifica se a coluna 'Descrição' existe
        if '="Descrição"' not in df.columns:
            print(f"Coluna 'Descrição' não encontrada no arquivo {arquivo}.")
            continue
        
        # Filtra a linha "APOIO ADMINISTRATIVO"
        filtro = df[df['="Descrição"'] == 'APOIO ADMINISTRATIVO']
        
        print(f"Linhas filtradas para 'APOIO ADMINISTRATIVO' no arquivo {arquivo}:")
        print(filtro)

        # Converte o DataFrame filtrado para JSON
        dados_json = filtro.to_json(orient='records', force_ascii=False)
        
        # Adiciona os dados filtrados na lista
        todos_os_dados.extend(json.loads(dados_json))

    # Salva todos os dados em um único arquivo JSON
    with open('apoio_administrativo_todos.json', 'w', encoding='utf-8') as file:
        json.dump(todos_os_dados, file, ensure_ascii=False, indent=4)
    
    print(f"Dados filtrados salvos em apoio_administrativo_todos.json")

# Diretório de download
download_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'downloads')

# Processa todos os arquivos CSV no diretório
processar_arquivos_csv(download_dir)

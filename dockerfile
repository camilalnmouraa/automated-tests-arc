FROM node:22.4-bullseye-slim

# Cria o diretório de trabalho
RUN mkdir /var/cucumberproject

# Define o diretório de trabalho
WORKDIR /var/cucumberproject

# Instala dependências necessárias
RUN apt update && apt install --no-install-recommends -y xvfb libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth 

# Limpa arquivos desnecessários
RUN rm -rf /tmp/pear \    
    && apt-get clean \
    && apt-get autoremove \
    && rm -rf /var/lib/apt/lists/*

# Copia todos os arquivos do projeto para o diretório de trabalho do contêiner
COPY . /var/cucumberproject/

# Dá permissão de execução ao script de inicialização
RUN chmod +x /var/cucumberproject/start.sh

# Define o comando de entrada
CMD ["/var/cucumberproject/start.sh"]
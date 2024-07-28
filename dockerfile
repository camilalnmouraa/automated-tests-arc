FROM node:22.4-bullseye-slim

# Cria o diretório de trabalho
RUN mkdir /var/cucumberproject

# Define o diretório de trabalho
WORKDIR /var/cucumberproject

RUN apt update && \
    apt install --no-install-recommends -y \
    xvfb \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    wget \
    gnupg \
    ca-certificates \
    curl && \
    apt-get clean && \
    apt-get autoremove

# Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt update && \
    apt install -y google-chrome-stable


# Copia todos os arquivos do projeto para o diretório de trabalho do contêiner
COPY . /var/cucumberproject/

RUN npm install

# Dá permissão de execução ao script de inicialização
RUN chmod +x /var/cucumberproject/start.sh

# Define o comando de entrada
CMD ["/bin/bash", "/var/cucumberproject/start.sh"]
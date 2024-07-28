#!/bin/bash
set -e

/var/cucumberproject/node_modules/.bin/cypress install

# Configurar Xvfb
Xvfb :99 -screen 0 1280x1024x16 &

export DISPLAY=:99

# Definir o navegador
BROWSER=${CYPRESS_browser:-chrome}

echo "Running Cypress tests on browser=${BROWSER}..."
/var/cucumberproject/node_modules/.bin/cypress run --browser ${BROWSER}

# Manter o container em execução
tail -f /dev/null
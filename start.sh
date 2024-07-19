#!/bin/bash
set -e

npm install

/var/cucumberproject/node_modules/.bin/cypress install

/var/cucumberproject/node_modules/.bin/cypress run

# tail -f /dev/null
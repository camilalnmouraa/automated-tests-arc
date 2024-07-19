# Automated Tests ARC

Projeto de exemplo para testes automatizados com Cypress e Cucumber, utilizando GitHub Actions para CI/CD.

- Executa testes end-to-end com `Cypress no Docker`.
- Gera relatórios de testes com `multiple-cucumber-html-reporter`.
- Publica relatórios no `GitHub Pages`.

## Pré-requisitos

É necessário ter Node.js e npm instalados para rodar este projeto.

> Usei as versões `v20.14.0` e `10.7.0` do Node.js e npm, respectivamente. Sugiro usar as mesmas versões ou versões mais recentes.

## Instalação

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Lint

Execute `npm run lint` para verificar a conformidade do código com as regras de lint.

## Testes

Execute `npm run test` (ou `npm t` para a versão curta) para rodar os testes.

## Relatórios

Execute `npm run generate-report` para gerar o relatório dos testes.

## CI/CD

O projeto utiliza GitHub Actions para integração contínua e deploy dos relatórios no GitHub Pages.

> Após o workflow rodar, os relatórios estarão disponíveis em `https://<seu-usuario>.github.io/<seu-repositorio>`.

___

Este projeto foi criado por [Camila Moura](https://www.linkedin.com/in/camilalnmoura/) 🤘

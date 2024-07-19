# Automated Tests ARC

Sample project for automated testing with Cypress and Cucumber, using GitHub Actions for CI/CD.

- Executes end-to-end tests with `Cypress in Docker`.
- Generates test reports with `multiple-cucumber-html-reporter`.
- Publishes reports on `GitHub Pages`.

## Prerequisites

You need to have Node.js and npm installed to run this project.

> I used versions `v20.14.0` and `10.7.0` of Node.js and npm, respectively. I suggest using the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the development dependencies.

## Lint

Run `npm run lint` to check code compliance with lint rules.

## Tests

Run `npm run test` (or `npm t` for the short version) to execute the tests.

## Reports

Run `npm run generate-report` to generate the test report.

## CI/CD

The project uses GitHub Actions for continuous integration and deployment of reports to GitHub Pages.

> After the workflow runs, the reports will be available at `https://<your-username>.github.io/<your-repository>`.

___

This project was created by [Camila Moura](https://www.linkedin.com/in/camilalnmoura/) 🤘

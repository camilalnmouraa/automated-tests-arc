const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({

  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://www.google.com',
    video: true,
  },
})
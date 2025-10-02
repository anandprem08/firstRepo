const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
})
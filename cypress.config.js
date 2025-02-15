const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'shortDate',
    charts: true,
    reportPageTitle: 'Reals Test Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/e2e/stepDefs/',

  },

  e2e: {

    setupNodeEvents(on, config) {

      return on('file:preprocessor', cucumber())

    },

    specPattern: 'cypress/e2e/**/*.feature',

    supportFile:false

  },

})
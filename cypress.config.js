const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      return config
    },
    baseUrl: 'http://localhost:3000/'
  }
})

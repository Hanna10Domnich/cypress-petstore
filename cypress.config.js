const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/**/*.cy.{js,jsx,ts,tsx}'
    ],
    setupNodeEvents(on, config) {
      // Set up for development environment
      if (process.env.NODE_ENV === 'development') {
        // You can add dev-specific config or plugins here
        // Example: config.env.devMode = true;
      }
      return config;
    },
  },
});

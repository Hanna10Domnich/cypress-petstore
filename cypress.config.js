const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
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

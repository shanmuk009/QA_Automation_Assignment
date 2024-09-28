const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 90000,
  defaultCommandTimeout:9000,
  chromeWebSecurity:false,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      console.log('Node events are set up');
      require('cypress-mochawesome-reporter/plugin')(on)
      let amazonText = '';
      let flipkartText = '';

      on('task', {
        storeAmazonText(text) {
          amazonText = text;
          return null;
        },
        storeFlipkartText(text) {
          flipkartText = text;
          return null;
        },
        getAmazonText() {
          return amazonText;
        },
        getFlipkartText() {
          return flipkartText;
        }
      });
      // implement node event listeners here
    },
  },
  
});

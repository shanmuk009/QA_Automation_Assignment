const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 90000,
  defaultCommandTimeout:9000,
  chromeWebSecurity:false,
  //reporter: mocha,
  e2e: {
    setupNodeEvents(on, config) {
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
  browser:'Chrome'
});

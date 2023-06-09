const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      on('task',{
        log(message){
          console.log(message)
          return null
        },
      })
      // implement node event listeners here
    },
      experimentalEventsPolyfill: true,
      chromeWebSecurity: false
  },
});

let retry = require("mocha").retry;

module.exports = {
  //defaultCommandTimeout: 10000,
  //execTimeout: 60000,
  //pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
 
  envConfig: {
    test: {
      baseUrl: "https://jsonplaceholder.typicode.com",
    
    },
}
 
};

const config = require("./config");
const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiAsPromised = require("chai-as-promised");
const { assert, expect, should } = require("chai");
const axios = require("axios").default;
// const mocharc = require("./reports/mocharc");

//set assert should and get globally
global.assert = chai.assert;
global.should = chai.should();
global.expect = chai.expect;
chai.use(chaiHttp);
chai.use(chaiAsPromised);

//Created an object to set environment 
const Enviroments = {
  TEST: "test",
  STAGING: "staging",
  PRODUCTION: "production",
};

//set environment
const server = config.envConfig[Enviroments.TEST];

//global.loginToken = "this is my login token";

const { baseUrl } = server;

const getBaseURL = async function () {
  if (!baseUrl) {
    await axios
      .post(server.baseUrl)
      .then((response) => {
        if (response.status === 200) {
          console.log("response received and set");
          return Promise.resolve("OK");
        } else {
          return Promise.reject("Failed");
        }
      });
  } else {
    return Promise.resolve("OK");
  }
};

const getRequest = function (endpoint) {
  
  return chai
    .request(baseUrl)
    .get(endpoint)
    
};

const postRequest = function (endpoint) {
  return chai
    .request(baseUrl)
    .post(endpoint)
   
};

module.exports = {
  mocha,
  chai,
  server,
  getBaseURL,
  getRequest,
  postRequest,
  expect,
  assert,
  should,
};

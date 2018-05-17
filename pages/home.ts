import { findElementLocation } from '../utils/helper';

const homePageCommands = {
  fillForm,
  findElementLocation,
};

function fillForm() {
   this.setValue('@userEmail', 'syyan@thoughtworks.com')
    .setValue('@passWord', '2739393ysy')
    .click('@submit')
     .waitForElementNotPresent('@submit', 2000);
}


module.exports = {
  commands: [homePageCommands],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    userEmail: 'input[name="email"]',
    passWord: 'input[name="password"]',
    submit: {
      selector: '//*[contains(text(), \'Sign In\')]',
      locateStrategy: 'xpath',
    },
  },
};

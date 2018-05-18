import { TIMEOUT } from '../utils/constants';

const circleLifeHomeCommands = {
  selectMyAccount,
  validateEmail,
};

function selectMyAccount() {
  return this.waitForElementVisible('@myAccount', TIMEOUT)
    .click('@myAccount');
}

function validateEmail(email: string) {
  return this.waitForElementVisible('@email', TIMEOUT)
    .assert.value('@email', email);
}

module.exports = {
  commands: [circleLifeHomeCommands],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    title: '#checkout-title',
    email: '#st-container > div > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div > form > div:nth-child(3) > div > input',
    myAccount: {
      selector: '//*[contains(text(), \'MY ACCOUNT\')]',
      locateStrategy: 'xpath',
    },
  },
};

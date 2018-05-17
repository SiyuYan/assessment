import {fillForm} from "../utils/commonFunction";
const circleLifeCommands = {
  fillForm,
};


module.exports = {
  commands: [circleLifeCommands],
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

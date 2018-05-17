const homePageCommands = {
  fillForm,
};

function fillForm(email: string, password: string) {
  this.setValue('@userEmail', email)
    .setValue('@passWord', password)
    .click('@submit')
    .api.pause(2000);
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

const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
let home = client.page.home();

Given('a user open Circle Life login page', function () {
  home.navigate();
  client.assert.urlContains('login');

});
When('login with users {string} and {string}', function (email: string, password: string) {
  return home.fillForm(email, password)
});
Then('login {string}', function (result: string) {
  if (result === 'successful') {
    return client.assert.urlContains('plan');
  }
  else {
    return client.assert.urlNotContains('plan');
  }
});
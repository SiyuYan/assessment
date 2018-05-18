import { config } from '../utils/config';

const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
let login: any, loginUrlText: any, homeUrlText: any, home: any;

if (process.env.case === 'circleLife') {
  login = client.page.circleLifeLogin();
  home = client.page.circleLifeHome();
  loginUrlText = config.circleLife.loginUrlText;
  homeUrlText = config.circleLife.homeUrlText;
}

if (process.env.case === 'facebook') {
  login = client.page.facebookLogin();
  home = client.page.facebookHome();
  loginUrlText = config.facebook.loginUrlText;
  homeUrlText = config.facebook.homeUrlText;
}

Given('a user open login page', function () {
  login.navigate();
  client.assert.urlContains(loginUrlText);
});
When('login with users {string} and {string}', function (email: string, password: string) {
  return login.fillForm(email, password)
});
Then('login {string}', function (result: string) {
  if (result === 'successful') {
    return client.assert.urlContains(homeUrlText);
  }
  else {
    return client.assert.urlNotContains(homeUrlText);
  }
});
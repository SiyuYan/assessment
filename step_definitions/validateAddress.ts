import { config } from '../utils/config';

const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
let home: any;


if (process.env.case === 'circleLife') {
  home = client.page.circleLifeHome();
}

if (process.env.case === 'facebook') {
  home = client.page.facebookHome();
}

When('select my account', function () {
  return home.selectMyAccount();
});

Then('validate email address {string}', function (email: string) {
  return home.validateEmail(email);
});

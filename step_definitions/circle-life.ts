const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');

Given('a user open Circle Life home page', function () {
  return client.url('https://pages.circles.life/')
});
When('he selects to login and got to login page', function () {
  let home = client.page.home();
  return home.navigate().fillForm()
  .fillForm('syyan@thoughtworks.com', '2739393ysy');
});
When('he input valid email', function () {
  return this;
  // client.setValue('@userEmail', 'nightwatch@test.com')
  //   .setValue('@passWord', 'Password1')
});
Then('he login successfully', function () {
  return client.assert.urlContains('plan');
});
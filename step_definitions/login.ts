import {getLogin} from "../utils/commonFunction"

const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');


let loginObj: any = {};
Given('a user open {string} login page', function (website: string) {
    loginObj = getLogin(website);
    const {login, loginUrlText} = loginObj;
    login.navigate();
    client.assert.urlContains(loginUrlText);
});

When('login with users {string} and {string}', function (email: string, password: string) {
    const {login} = loginObj;
    return login.fillForm(email, password)
});

Then('login {string}', function (result: string) {
    const {homeUrlText} = loginObj;
    if (result === 'successful') {
        return client.assert.urlContains(homeUrlText);
    }
    else {
        return client.assert.urlNotContains(homeUrlText);
    }
});
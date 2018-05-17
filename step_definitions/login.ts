import {config} from '../utils/config';

const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
let login: any, loginUrl: any, homeUrl: any;

Given('a user open login page', function () {

    if (process.env.case === 'circleLife') {
        login = client.page.circleLifeLogin();
        loginUrl = config.circleLife.loginUrl;
        homeUrl = config.circleLife.homeUrl;
    }

    if (process.env.case === 'facebook') {
        login = client.page.facebookLogin();
        loginUrl = config.facebook.loginUrl;
        homeUrl = config.facebook.homeUrl;
    }
    login.navigate();
    client.assert.urlContains(loginUrl);
});
When('login with users {string} and {string}', function (email: string, password: string) {
    return login.fillForm(email, password)
});
Then('login {string}', function (result: string) {
    if (result === 'successful') {
        return client.assert.urlContains(homeUrl);
    }
    else {
        return client.assert.urlNotContains(homeUrl);
    }
});

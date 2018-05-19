import {getHome} from "../utils/commonFunction"

const {Then, When} = require('cucumber');
let home: any;

When('select my account on {string}', function (website: string) {
    home = getHome(website);
    return home.selectMyAccount();
});

Then('validate email address {string}', function (email: string) {
    return home.validateEmail(email);
});

import {TIMEOUT} from '../utils/constants';

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
        email: '.container-fluid:nth-child(2) .form-group:nth-child(3) input',
        myAccount: {
            selector: '//*[contains(text(), \'MY ACCOUNT\')]',
            locateStrategy: 'xpath',
        },
    },
};

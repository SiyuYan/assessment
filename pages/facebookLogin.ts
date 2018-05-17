import {fillForm} from "../utils/commonFunction";
const facebookCommands = {
    fillForm,
};

module.exports = {
    commands: [facebookCommands],
    url() {
        return "https://www.facebook.com/login/";
    },
    elements: {
        userEmail: 'input[name="email"]',
        passWord: 'input[name="pass"]',
        submit: 'button[name="login"]'
    },
};

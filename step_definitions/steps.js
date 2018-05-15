"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
const { client } = require('nightwatch-cucumber');
const cucumber_1 = require("cucumber");
cucumber_1.Given(/^I open Google`s search page$/, () => {
    return client
        .url('http://google.com');
});
cucumber_1.Given(/^I open DuckDuckGo search page$/, () => {
    return client
        .url('https://duckduckgo.com/');
});
cucumber_1.Then(/^the title is "(.*?)"$/, (text) => {
    return client.assert.title(text);
});
cucumber_1.Then(/^the Google search form exists$/, () => {
    return client.assert.visible('input[name="q"]');
});
cucumber_1.Then(/^the DuckDuckGo search form exists$/, () => {
    return client.assert.visible('input[name="q"]');
});
//# sourceMappingURL=steps.js.map
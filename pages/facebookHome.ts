import {TIMEOUT} from "../utils/constants";
const facebookHomeCommands = {
    selectNewsFeed,
    addComment,
    validateCommentsDisplay
};

function selectNewsFeed() {
    return this.waitForElementVisible('@newsFeed', TIMEOUT)
        .click('@newsFeed');
}

function addComment(message: string) {
    return this.waitForElementVisible('@postArea', TIMEOUT)
        .click('@post')
        .setValue('@post', message)
        .waitForElementVisible('@postButton', TIMEOUT)
        .click('@postButton')
        .api.pause(TIMEOUT);
}

function validateCommentsDisplay() {
    return this.waitForElementVisible('@comments', TIMEOUT)
        .assert.elementPresent('@comments');
}

module.exports = {
    commands: [facebookHomeCommands],
    url() {
        return "https://www.facebook.com/";
    },
    elements: {
        newsFeed: 'a[title="News Feed"]',
        postArea: 'div[aria-label="Create a post"]',
        post: 'textarea[name="xhpc_message"]',
        postButton: 'button[data-testid="react-composer-post-button"]',
        comments: 'div[aria-label="News Feed"]'
    },
};

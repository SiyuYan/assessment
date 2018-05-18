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

When('select news feed and post one comment', function () {
  return home
    .selectNewsFeed()
    .addComment('test');
});

Then('view the comment published', function () {
  return home.validateCommentsDisplay();
});

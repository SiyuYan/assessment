import {getHome} from "../utils/commonFunction"

const {Then, When} = require('cucumber');
let home: any;

When('select news feed and post one comment on {string}', function (website: string) {
    home = getHome(website);
    return home
        .selectNewsFeed()
        .addComment('test');
});

Then('view the comment published', function () {
    return home.validateCommentsDisplay();
});

// // tslint:disable-next-line:no-var-requires
// import { TIMEOUT } from './constants';
// import { config } from './config';
//
// const chromedriver = require('chromedriver');
//
// module.exports = {
//   before: (client: any, done: (num: number) => void) => {
//     login = client.page.circleLifeLogin();
//     home = client.page.circleLifeHome();
//     loginUrlText = config.circleLife.loginUrlText;
//     homeUrlText = config.circleLife.homeUrlText;
//   },
//   after: (done: (num: number) => void) => {
//     chromedriver.stop();
//     done(TIMEOUT);
//     // tslint:disable-next-line:no-console
//     console.log('chromedriver is stoped');
//   },
// };

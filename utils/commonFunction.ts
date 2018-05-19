import { CIRCLE_LIFE, FACEBOOK, TIMEOUT } from "./constants";
import { config } from "./config"

const { client } = require('nightwatch-cucumber');


export function fillForm(email: string, password: string) {
  this.setValue('@userEmail', email)
    .setValue('@passWord', password)
    .click('@submit')
    .api.pause(TIMEOUT);
}

export function getHome(website: string | undefined) {
  switch (website) {
    case CIRCLE_LIFE:
      return client.page.circleLifeHome();
    case FACEBOOK:
      return client.page.facebookHome();
    default:
      throw Error("Website not found! Please check the parameter")
  }
}

export function getLogin(website: string | undefined) {
  if (website === FACEBOOK) {
    return {
      login: client.page.facebookLogin(),
      loginUrlText: config.facebook.loginUrlText,
      homeUrlText: config.facebook.homeUrlText
    }
  } else {
    return {
      login: client.page.circleLifeLogin(),
      loginUrlText: config.circleLife.loginUrlText,
      homeUrlText: config.circleLife.homeUrlText
    }
  }
}
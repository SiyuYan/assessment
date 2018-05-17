export function findElementLocation(selector: string) {
  return this
    .getLocationInView(selector, (result: any) => {
      // tslint:disable-next-line:no-console
      console.log(selector, result.value.x, result.value.y);
      this.api.execute(`scrollTo(${result.value.x},
      document.querySelector('html').scrollTop + ${result.value.y - 88})`)
        .pause(2000);
    });
}
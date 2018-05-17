export function fillForm(email: string, password: string) {
    this.setValue('@userEmail', email)
        .setValue('@passWord', password)
        .click('@submit')
        .api.pause(2000);
}

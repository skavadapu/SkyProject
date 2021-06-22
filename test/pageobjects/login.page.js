
/**
 * Login Page containing specific selectors and methods for a Login page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSignIn() { return $('button[id="signinButton"]') }
    get displayErrorMsg() { return $(".globalErrors") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSignIn.waitForClickable();
        this.btnSignIn.click();
    }

}

module.exports = new LoginPage();

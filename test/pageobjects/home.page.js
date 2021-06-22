
/**
 * Home page containing specific selectors and methods for a Login page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get linkDeals() { return $("//a[contains(text(),'Deals')]") }
    get linkSignin() { return $("//a[contains(text(),'Sign in')]") }
    get cookieFrame() { return $("[id='sp_message_iframe_474555']") }
    get cookieBtnAgree() { return $("button[title='Agree']") }

    /**
     * Methods for interacting the Home page links
     */

    launchHomeUrl() {
        browser.url("/");  //Populating baseUrl from the config file (wdio.conf.js)
        browser.deleteCookies();  //clears the browser cookies
        browser.maximizeWindow();  //maximizes the window size
        // browser.pause(2000);
    }
    clickLinkDeals() {
        this.linkDeals.waitForDisplayed();
        this.linkDeals.click();
    }

    clickLinkSignin() {
        this.linkSignin.waitForDisplayed();
        this.linkSignin.click();
    }

    clickCookieAgree() {
        this.cookieFrame.waitForDisplayed();
        browser.switchToFrame(this.cookieFrame);
        this.cookieBtnAgree.waitForDisplayed();
        this.cookieBtnAgree.click();
        browser.switchToFrame(null);
    }

}

module.exports = new HomePage();

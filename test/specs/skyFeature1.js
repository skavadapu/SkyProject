const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const DealsPage = require('../pageobjects/deals.page');
const expectchai = require("chai").expect;
const expectassert = require("chai").assert;
const { assert } = require('chai');


describe('Feature 1 - This feature will make sure that the shop page is navigable and usable', () => {
    /*  Feature: This feature will make sure that the shop page is navigable and usable.
    SCENARIO 1
        Scenario: User navigates to shop page
        Given I am on the home page
        When I navigate to ‘Deals’
        Then the user should be on the https://www.sky.com/deals page 
    */

    it('Scenario 1 - User navigates to sky home page', () => {

        //Launching Home page
        HomePage.launchHomeUrl();

        //Validating the Home page website title
        expect(browser).toHaveTitleContaining("Sky TV, Broadband & Mobile | News, Sports & Movies | Sky.com");
        
        //Accepting the cookies
        HomePage.clickCookieAgree();
    })
    /* SCENARIO 2
        Scenario: User sees a list of deals on the deals page 
        Given I am on the ‘https://www.sky.com/deals‘ page 
        Then I see a list of deals with a price to it (see Snapshot B)

        For example:
        “£27”, “£41”, “£38”
    */
    it('Scenario 2 - User sees a list of deals on the deals page', () => {

        //Launching the Deals page
        HomePage.clickLinkDeals();
       
        //Validating the Deals page Url
        expect(browser).toHaveUrl('https://www.sky.com/deals')

        //Validating the Deals page title
        expect(browser).toHaveTitleContaining("Latest Sky TV deals for new customers | Sky.com")

        //Grabbing the Deals Tariffs
        const dealsTariffs = DealsPage.getdealsListTariff();
        
        // Listing the Deals tariffs
        console.log('***TOP Deals are ...***')
        console.log(dealsTariffs);

    })

    /* SCENARIO 3
    Scenario: User sees tiles on the shop page (scenario suppose to be like 'User sees error message on login page')
    Given I am on the home page
    When I try to sign in with invalid credentials 
    Then I should see a text saying that ‘Sorry, we did not recognise either your username or password’
    (See Snapshot A)
    */
    it('Scenario 3 - User sees error message on login page', () => {
        
        //Launching login page
        HomePage.clickLinkSignin();
        
        //Asserting the login page browser title
        expect(browser).toHaveTitleContaining("Sky - Sign in");
        
        //passing invalid login credentials
        LoginPage.login('wronguser1@abc.com', 'wrongpwd')
        
        //Asserting the error message text
        expect($(".globalErrors")).toHaveTextContaining('Sorry, we did not recognise either your username or password');

    })


});
const expectchai = require("chai").expect
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('Feature 2: This feature show the results that are determined by editorial/generic searches', () => {
    /* Feature: This feature will make the search show the results that are determined by editorial, 
                as well as generic searches.
    SCENARIO 4
        Scenario: User sees the editorial section in specific searches
        Given I am on the home page
        When I search ‘sky’ in the search bar
        Then I should see an editorial section. (Note: Editorial section is the section highlighted in Snapshot C)
        (Note: if ‘sky’ doesn’t work you can change it to ‘tv’)
    */

    it('User sees the editorial section in specific searches', () => {

        //Launching home page url
        HomePage.launchHomeUrl();

        //Verifing the Search page browser title
        expect(browser).toHaveTitleContaining("Sky TV, Broadband & Mobile | News, Sports & Movies | Sky.com");
        
        // Accepting the cookies
        HomePage.clickCookieAgree();

        //Clicking the Search toggle on site header
        SearchPage.clickSearchToggle();

        //inputting the search criteria (sky) and clicking Search button
        SearchPage.clickSearchButton();

    })

})

/**
 * Search Page containing specific selectors and methods for a Search page
 */
class SearchPage {
    /**
     * define selectors using getter methods
     */
    get linkSearchToggle(){return $(".search-toggle__icon")}
    get inputSearch(){return $("input[data-test-id='input-box']")}
    get btnSearch(){return $("button[data-test-id='submit-button']")}

    /**
     * Methods for interacting the Search page links
     */
    //Clicking the Search toggle button
     clickSearchToggle() {
         this.linkSearchToggle.waitForDisplayed();
         this.linkSearchToggle.click();
    }
    //Inputting search keyword and clicking Search button
    clickSearchButton() {

        this.inputSearch.waitForDisplayed();
        this.inputSearch.setValue("sky");  //searching for sky word
        this.btnSearch.waitForDisplayed();
        this.btnSearch.click();
    }

}

module.exports = new SearchPage();

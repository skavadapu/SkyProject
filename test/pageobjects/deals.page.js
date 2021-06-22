
/**
 * sub page containing specific selectors and methods for a Login page
 */
class DealsPage {
    /**
     * define selectors using getter methods
     */
    get dealsList() { return $$(".ebwAcM") }

    /**
     * a method to encapsule automation code to interact with the Deals page
     */
    //Grabbing the Deals Tariffs
    async getdealsListTariff() {
        const dealsTariffs = [];
        this.dealsList.map(element => {
            dealsTariffs.push(element.getText())
        })
        return dealsTariffs
    }
}

module.exports = new DealsPage();

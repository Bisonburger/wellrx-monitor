module.exports = {

    url: 'http://www.wellrx.com',

    elements: {
        drugInput: by.id('drugname'),
        addressInput: by.id('address'),
        searchResultLink: by.id('res')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    performSearch: function (drugName, address) {

        var selectorDrug = page.drugSearch.elements.drugInput;
        var selectorAddress = page.drugSearch.elements.addressInput;

        // return a promise so the calling function knows the task has completed
        driver.findElement( selectorDrug ).sendKeys( drugName ).then( () =>
          driver.findElement(selectorAddress).sendKeys(address, selenium.Key.ENTER) );
    }
};

module.exports = function () {

  this.When(/^I search for "([^"]*)" at location "([^"]*)"$/, function (drug,address) {

    return helpers.loadPage('http://www.wellrx.com').then(function() {
        return page.drugSearch.performSearch(drug,address);
    })
});

    this.Then(/^I should see results$/, function () {

        // driver wait returns a promise so return that
        return driver.wait(until.elementsLocated(by.id('res')), 10000).then(function(){

            // return the promise of an element to the following then.
            return driver.findElements(by.id('res'));
        })
        .then(function (elements) {

            // verify this element has children
            expect(elements.length).to.not.equal(0);
        });
    });
};

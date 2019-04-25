module.exports = function () {

  this.When(/^I search for "([^"]*)" at location "([^"]*)"$/, function (drug,address) {

    return helpers.loadPage('http://www.wellrx.com').then(function() {
        return page.drugSearch.performSearch(drug,address);
    })
});

    this.Then(/^I should see results for "([^"]*)"$/, function (drug) {
        return driver.wait(until.elementsLocated(by.id('res')), 10000).then(function(){
            return driver.findElements(by.id('res'));
        })
        .then(function (elements) {
            expect(elements.length).to.not.equal(0);
        });
    });
};

var chai = require("chai");

chai.use( require("chai-as-promised") );

chai.should();

module.exports = function () {

  this.When(/^I search for "([^"]*)" at location "([^"]*)"$/, function (drug,address) {

    return helpers.loadPage('http://www.wellrx.com').then(function() {
        return page.drugSearch.performSearch(drug,address);
    })
});

    this.Then(/^I should not see an error message$/, function () {
        return driver.wait(until.elementsLocated(by.id('error')), 10000).then(function(){
            return driver.findElement(by.id('error'));
        })
        .then(function (element) {
            element.isDisplayed().should.eventually.be.false;
        });
    });

    this.Then(/^I should see an error message$/, function () {
        return driver.wait(until.elementsLocated(by.id('error')), 10000).then(function(){
            return driver.findElement(by.id('error'));
        })
        .then(function (element) {
            element.isDisplayed().should.eventually.be.true;
        });
    });
};

var chai = require("chai"),
    should = chai.should();

chai.use( require("chai-as-promised") );

module.exports = function () {

  this.When(/^I search for "([^"]*)" at location "([^"]*)"$/, function (drug,address) {
    return helpers
      .loadPage( 'http://www.wellrx.com' )
      .then( () => page.drugSearch.performSearch(drug,address) );
  });

  this.Then(/^I should(n't)* see an error message$/, function (not) {
    let shouldSee = !not;
    shared.helper
      .waitAndFindElement(page.drugSearchResults.elements.error)
      .then( (errorMsg) => errorMsg.isDisplayed().should.eventually.equal( shouldSee ) );
  });

  this.Then(/^I should(n't)* see drug search results$/, function (not) {
    let shouldSee = !not;
    shared.helper
      .waitAndFindElement(page.drugSearchResults.elements.results)
      .then( (results) => shouldSee? should.eventually.exist( results ) : should.not.eventually.exist( results ) );
  });


};

module.exports = {
  waitAndFindElement: ( selector ) =>
    driver
      .wait(until.elementsLocated(selector), 10000)
      .then( () => driver.findElement(selector) )
};

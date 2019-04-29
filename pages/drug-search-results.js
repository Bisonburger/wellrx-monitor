module.exports = {

    elements: {
        error: by.id('error'),
        results: by.id('results')
    },

    url: ( drugName, address ) => `http://www.wellrx.com/${drugName}/${address}`

};

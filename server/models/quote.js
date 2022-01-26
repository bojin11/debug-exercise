const quotesData = require('../data');

class Quote {
    constructor(data) {
        this.id = data.id;
        this.quote = data.quote;
       
    }

    static get all() {
        const quotes = quotesData.map((quote) => new Quote(quote));
        return quotes;
    }

    static findById(id) {
        try {
            const quoteData = quotesData.filter((quote) => quote.id === id)[0];
            const quote = new Quote(quoteData);
            return quote;
        } catch (err) {
            return { Error: "Quote id is out of range!" }
        }
    }


}

module.exports = Quote;
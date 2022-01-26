const express = require('express');
const router = express.Router();

const Quote = require('../models/quote');

router.get('/', (req, res) => {
    const quotesData = Quote.all;
    res.send(quotesData);
});

router.get('/random', (req, res) => {
    var quoteId = Math.floor(Math.random() * 15 + 1);
    const selectedQuote = Quote.findById(quoteId);
    res.send(selectedQuote);
});

router.get('/:id', (req, res) => {
    try {
        const quoteId = parseInt(req.params.id);
        const selectedQuote = Quote.findById(quoteId);
        res.send(selectedQuote);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router;
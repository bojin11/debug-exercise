const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello there yet again!');
});

app.post('/', (req, res) => {
  res.status(405).send('Not allowed!');
});

// To do: Create a route for retrieving all quotes

const quoteRoutes = require('./controller/quotes');
//const quotes = require('./data');
app.use('/quotes', quoteRoutes);


// To do: Create a route for retrieving a random quote

// see in controller, added router.get('/random', (req, res) => {}

// To do: Refine this route and add handling for out-of-range IDs

// see in model, added error return message: return { Error: "Quote id is out of range!" }

// To do: Get the server running
 
module.exports = app;
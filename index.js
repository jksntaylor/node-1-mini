const express = require ('express');
const bodyParser = require('body-parser');
const bc = require('./controller/booksController');
const app = express();
app.use(bodyParser.json());
const port = 4000;


app.get('/api/books', bc.getBooks);

app.post('/api/books', bc.postBook);

app.put('/api/books/:id', bc.update)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
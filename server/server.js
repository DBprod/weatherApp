const express = require('express');
const bodyPaser = require('body-parser');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
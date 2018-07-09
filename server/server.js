const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/', (req, res) => {
    const apiKey = '5649a3f39b1975b1732986f61988a10c';
    var city = req.body.city;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url).then((weather) => {
        res.send(weather.data);
    }).catch((e) => res.status(404).send());
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
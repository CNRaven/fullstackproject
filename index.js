const express = require('express');
const mongoose = require('.mongoose');
const key = require('./config/keys');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const app = express();

app.get('/', (req, res) => {
    res.send({ someText: "Hello"});
});

const PORT = process.env.PORT || 5000;
//in production use heroku PORT, in development use 5000

app.listen(PORT);
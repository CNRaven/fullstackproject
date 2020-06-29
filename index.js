const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(200).json({ someText: "Hello"});
});

const PORT = process.env.PORT || 5000;
//in production use heroku PORT, in development use 5000

app.listen(PORT);
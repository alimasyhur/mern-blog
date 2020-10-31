require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require("./config");
const app = express();
const PORT = 5000;

mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});

mongoose.connection.on("error", (err) => {
  console.error("Error " + err);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.send('Home');
});

app.get('/category', (req, res) => {
    res.send('Category');
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
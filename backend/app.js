const express = require('express');
const app = express();
const PORT = 5000;

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
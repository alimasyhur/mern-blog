require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { mongoURI, PORT } = require("./config");
const app = express();

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

require("./models/post");
require('./models/category');
require('./models/comment');

app.use(express.json());
app.use(require('./routes/post'));
app.use(require('./routes/category'));
app.use(require('./routes/comment'));

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
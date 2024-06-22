const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/educacao_infantil', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/progress', progressRoutes);

module.exports = app;

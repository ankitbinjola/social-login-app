const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');


const app = express();

mongoose.connect('mongodb://localhost:27017/passport', () => {
    console.log('DB connected....');
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/api/v1', auth);

app.listen(4000, () => {
    console.log('server running on port 4000...');
})
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Mongoose
mongoose.connect(
    'mongodb://localhost/diyApi'),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

const db = mongoose.connection;

// Connection Methods
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});

db.on('error', err => {
    console.log(`Database Error:\n${err}`)
});

const basketballPlayer = require('./models/basketballPlayer');

// Home Route
app.get('/', (req, res) => {
    res.json({message: 'Home'});
});

app.use('/basketballPlayers', require('./routes/basketballPlayers'));

app.listen(3000 || process.env.PORT, () => console.log(`You are listening to the smooth sounds of port ${3000 || process.env.PORT}`));
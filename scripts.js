const express = require('express');
const routes = require('./routes/routing')
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

//

// mongoose.connect('mongodb+srv://talaj794:clW9xbmlgahpoDWQ@cluster0.hblbj.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const db = mongoose.connection;

db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

//











mongoose.connect('mongodb+srv://talaj794:clW9xbmlgahpoDWQ@cluster0.hblbj.mongodb.net/');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', routes);

// app.listen(3000, () => {
//     console.log('running');

// })



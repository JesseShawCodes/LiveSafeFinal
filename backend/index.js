const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

/* 
Mongoose, BodyParser, the Schema, and the Mongoose Connection are set up to illustrate the steps of making post requests in the index.js file
*/

const {LiveSafeSchema} = require('./model/liveSafeModel')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Item = mongoose.model('Item', LiveSafeSchema)

//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/LiveSafeDB')

//Body Parser Setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Parses incoming requests with JSON payloads
app.use(express.json());

//Mock Data. Generated from Mockaroo 
//https://mockaroo.com/
var dataFile = require('./mock_data.json')

app.use(cors())


/*
Initial Data Request when user loads app
*/

app.get('/data', function(req, res) {
    res.json(dataFile);
})


/*
The GET request below is triggered each time a user types something in the Search
The :id in the endpoint is the text in the search bar on each keyUp

If User inputs matches either the title, user, or url data; that object is returned to the user
*/

app.get('/data/:id', function(req, res) {
    var output = []
    for (var i = 0; i < dataFile.length; i++) {
        var title = dataFile[i].title
        var userSearch = dataFile[i].user
        var urlSearch = dataFile[i].url
        if (title.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
        else if (userSearch.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
        else if (urlSearch.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
    }
    res.json(output);
})

/*
Add new Item to MongoDB Server
*/

app.post('/data', function(req, res) {
    let newItem = new Item(req.body);
    newItem.save((err, item) => {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
})

app.listen(PORT, () => {
    console.log(`Your Server is Running on PORT: ${PORT}`)
})

module.exports = { app };
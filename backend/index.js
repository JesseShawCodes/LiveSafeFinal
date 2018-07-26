const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(express.json());

//Mock Data. Generated from Mockaroo
var dataFile = require('./mock_data.json')

app.use(cors())

/*
Initial Data Request
*/

app.get('/', function(req, res) {
    res.send("testing");
})

app.get('/data', function(req, res) {
    res.json(dataFile);
})

/*
Get Data based upon input as user searches
*/

app.get('/data/:id', function(req, res) {
    var output = []
    for (var i = 0; i < dataFile.length; i++) {
        var title = dataFile[i].title
        var userSearch = dataFile[i].user
        if (title.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
        else if (userSearch.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
    }
    res.json(output);
})

app.listen(PORT, () => {
    console.log(`Your Server is Running on PORT: ${PORT}`)
})

module.exports = { app };
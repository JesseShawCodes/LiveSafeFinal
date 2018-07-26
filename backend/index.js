const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(express.json());

//Mock Data. Generated from Mockaroo 
//https://mockaroo.com/
var dataFile = require('./mock_data.json')

app.use(cors())


app.get('/', function(req, res) {
    res.send("testing");
})

/*
Initial Data Request when user loads app
*/

app.get('/data', function(req, res) {
    res.json(dataFile);
})

/*
The GET request below is triggered each time a user types something in the Search
The :id in the endpoint is the text in the search bar on each keyUp
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
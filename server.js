// Require express
const express = require('express');

// Assign express function to app
const app = express();

// Require JSON file
const data = require('./data.json')

// Set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', require('./routes/planets'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Assign port to either the hosting nextwork port or the assigned port number
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("WE LIVE BABY! COMING AT YA FROM PORT: " + PORT))

const express = require('express');
const env = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const pageroute = require('./routers/pageroute');


//express init
const app = express();

// for form data and json init
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// for port
const port = process.env.port || 5050;

//static folder
app.use('/public', express.static('public'));

//page init
app.use(pageroute);

// listen
app.listen(port, () => {
    console.log(`your server is okay on port ${port}`.bgCyan.yellow);
});

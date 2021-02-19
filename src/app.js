const express = require('express')
require('./db/mongoose')
const contactRouter = require('./routers/contact.route')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control');
    next();
});

app.use(express.json())
app.use(contactRouter)

module.exports = app
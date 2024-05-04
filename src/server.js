require('dotenv').config() 
const express = require('express') //commonjs
//import express from 'express' (es modules)

const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express() //create app express
const PORT = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)


//initializing route
app.use('/', webRoutes) //this means that all the routes we input will be behind this first param




app.listen(PORT, hostname, () => {
  console.log(`Example app listening on port ${PORT}`)
})
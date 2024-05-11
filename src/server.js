require('dotenv').config() 
const express = require('express') //commonjs
//import express from 'express' (es modules)

const mysql = require('mysql2')

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


//test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //default was 3306
  user: 'root',
  password: '123456', //default was empty
  database: 'hoidanit',
});

connection.query(
  'SELECT * FROM Users',
  function(err, results, fields){
    console.log(">>>results: ", results) //rows returned by server
    console.log(">>>fields: ", fields)  //extra meta data about results
  }
)


app.listen(PORT, hostname, () => {
  console.log(`Example app listening on port ${PORT}`)
})
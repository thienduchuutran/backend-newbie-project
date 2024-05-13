
//have to import this first to get any variables from .env
require('dotenv').config() 

const mysql = require('mysql2')


//test connection
// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default was 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //default was empty
    database: process.env.DB_NAME,
  });


  //since we gonna use variable "connection" in server.js, we gotta export it
  module.exports = connection
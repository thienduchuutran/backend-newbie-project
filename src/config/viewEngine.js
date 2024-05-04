const path = require('path')
const express = require('express')
console.log(__dirname)
const configViewEngine = (app) => {
    //config template engine
    // app.set('views', './views/')   //using this template engine in views folder
    
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    //config static files
    app.use(express.static(path.join('./src', 'public'))) //telling express that we storing static files in public folder
}

module.exports = configViewEngine
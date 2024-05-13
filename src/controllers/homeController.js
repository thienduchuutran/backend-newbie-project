const connection = require('../config/database')

const getHomepage1 = (req, res) =>{

    let users = []
    //this is where we handle data (aka the controller)
    //also we call model from database in here (if we want)
    connection.query(
        'SELECT * FROM Users WHERE Users.id=2',
        function(err, results, fields){
            users = results
            console.log(">>>results: ", results) //rows returned by server

            console.log(">>>check users: ", users)
            res.send(JSON.stringify(users))       //we need to convert back to string since res.send returns a string     
        }
      )

    }

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('checking')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    //let email = req.body.email
    //let name = req.body.username
    //let city = req.body.city

    //advanced 
    let {email, name, city} = req.body

    console.log("check req.body: ", email, name, city)
    //return res.send("create new user")

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, result){
            console.log(result)
            res.send('create successful')
        }
    );
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
}
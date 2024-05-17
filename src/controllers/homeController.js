const connection = require('../config/database')
const {getAllUsers, getUserById, updateUser} = require('../services/CRUDServices')

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

const getHomepage = async (req, res) => {

    let results = await getAllUsers()
    //console.log("check rowS: ", results) With this we can see that we got all the data from results variable. Now if we wanna render the data to UI we need to transfer data from homeController.js to home.ejs
    res.render('home.ejs', {listUsers: results})          //this means we are rendering whatever in home.ejs to the UI
}

const getABC = (req, res) => {
    res.send('checking')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    //let email = req.body.email
    //let name = req.body.username
    //let city = req.body.city

    //advanced 
    let {email, name, city} = req.body

    // console.log("check req.body: ", email, name, city)
    //return res.send("create new user")

    // await connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, result){
    //         console.log(result)
    //         res.send('create successful')
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    // console.log(">>check results ", results)
    res.send('create successful')

    // connection.query(
    //     'SELECT * FROM Users',
    //     function (err, results, fields) {
    //         console.log(">>>results: ", results)
    //     }
    // )

    // const [results, fields] = await connection.query('SELECT * FROM Users')
}

const getCreatePage = (req, res) =>{
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) =>{
    const userID = req.params.id

    let user = await getUserById(userID)
    
    res.render('edit.ejs', {userEdit : user}) // passing the value of user variable to edit.ejs file as userEdit variable
}

const postUpdateUser = async (req, res) => {
    let {email, name, city, userId} = req.body  //we need one more param which is user id since the database needs to know which user to edit, unlike when we create new user

    // console.log("check req.body: ", email, name, city)
    //return res.send("create new user")

    // await connection.query(
    //     `UPDATE Users SET email = ?, name = ?, city = ?
    //     WHERE id = ?`,
    //     [email, name, city, userId],
    //     function(err, result){
    //         console.log(result)
    //         res.send('updated successful')
    //     }
    // );

    await updateUser(email, name, city, userId)
    res.redirect("/")
    // res.render('home.ejs', {listUsers: results})
}

const postDeleteUser = async (req, res) => {
    const userID = req.params.id

    let user = await getUserById(userID)

    res.render("delete.ejs", {userEdit: user})
}

const postHanldeRemoveUser = (req, res) => {
    res.send('deleted')
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser, postDeleteUser,
    postHanldeRemoveUser
}
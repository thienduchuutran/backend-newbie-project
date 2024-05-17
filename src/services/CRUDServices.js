//connect with database to get data
const connection = require("../config/database")


//this CRUDServices file contains functions that will do the algorithms to get data
const getAllUsers = async() =>{
    //we wanna get data from the database, so we use variable "connection"
    let [results, fields] = await connection.query('Select * from Users')

    //in order for homeController to get any data retrieved from database by this function, we need to return
    return results
}

const getUserById = async(userID) => {
    let [results, fields] = await connection.query('Select * from Users where id = ?', [userID])
    
    let user = results && results.length > 0 ? results[0] : {}  //when we have object in object, if we don't do this to check condition, err
    return user
}

const updateUser = async(email, name, city, userId) => {

    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ?
            WHERE id = ?`,
            [email, name, city, userId]
    );

}

module.exports = {
    getAllUsers, getUserById, updateUser
}
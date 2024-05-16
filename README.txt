 the homeController.js is where we handle the route. Whenever users input a new route, we redirect the UI, as well as calling data from database (if applicable)

 any callback or event that takes time, we call it asynchronous (bất đồng bộ) since they don't follow any rule

 when there is the existence of database connection with the app, we need to consider the database rate limit. So far, I'm coding and designing the
 connection of the database with this app in a traditional way, which is not optimal at all if there are multiple users query at once. 
 The problem is every time a user retrieves data from the database, they need to run the query once, and so far the query is run directly in the source code,
 without any means of closing a query after being queried successfully, leaving potential loop holes. We gonna learn more about design pattern for database! 


 connection pool helps reduce the time connecting to database by REUSING previous connections. Pool limits the number of connections

 the action attribute of the form tag directs user to whatever inside the attribute after clicking submit the form. It has 2 attributes: action and method

 how to get any information that user puts in in the input form?
 --> use req.body that express supports

 the a tag is the get method by default 


Whenever we query, to avoid writing a whole thing like this (too long, with async await the code looks cleaner): 
    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, result){
            console.log(result)
            res.send('create successful')
        }
    );
We use async await

 With async await: 
 const postCreateUser = async (req, res) => {
    //let email = req.body.email
    //let name = req.body.username
    //let city = req.body.city

    //advanced 
    let {email, name, city} = req.body

    console.log("check req.body: ", email, name, city)

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log(">>check results ", results)
    res.send('create successful')

    // const [results, fields] = await connection.query('SELECT * FROM Users')
}


The await part is to replace the callback in the query


the [results, fields] expects to be returned an array

We got all the data from results variable in homeController.js. Now if we wanna render the data to UI we need to transfer data from homeController.js to home.ejs

The res.render in homeController.js has 2 parameters, first one is the file we wanna render to UI, second is the data we wanna transfer from current file to the file that 
gonna be rendered to UI

Now after we transfer the data to home.ejs (embedded JS into a HTML file, which helps us write JS in a HTML file), we can only get the data by using this syntax:
<%= listUsers%>

NOTICE: HTML doesn't support rendering object type, only string and number type, so we need to


CRUDServices file in services folder (we are doing MVC design pattern) contains functions that will do the algorithms to get data. This is how we split the works out
homeController.js in controllers folder is only to direct where the web users going after clicking any link
==> We do this all to reduce the code in homeController.js file

Usually when we interact with database, we need to apply async await to wait for the data to be got from the database

if we use regular for loop, we need to consider the index i of the array, but if we use forEach loop, it automatically loops through every single element in the array
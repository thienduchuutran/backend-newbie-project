 the homeController.js is where we handle the route. Whenever users input a new route, we redirect the UI, as well as calling data from database (if applicable)

 any callback or event that takes time, we call it asynchronous (bất đồng bộ) since they don't follow any rule

 when there is the existence of database connection with the app, we need to consider the database rate limit. So far, I'm coding and designing the
 connection of the database with this app in a traditional way, which is not optimal at all if there are multiple users query at once. 
 The problem is every time a user retrieves data from the database, they need to run the query once, and so far the query is run directly in the source code,
 without any means of closing a query after being queried successfully, leaving potential loop holes. We gonna learn more about design pattern for database! 
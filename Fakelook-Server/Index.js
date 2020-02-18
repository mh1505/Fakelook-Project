const express = require('express');
const app = express();
const mapRoutes = require('express-routes-mapper');
const port = process.env.port || 5000;
const routesConfig = require('./routes/routesConfig');
const cors = require('cors');

app.use(cors())

const usersData = require('./controllers/usersController')
app.use('/', usersData)

const mappedPostsRoutes = mapRoutes(routesConfig.postsRoutes, '/controllers/');
app.use('/postsRoutes', mappedPostsRoutes);






app.listen(port, function () {
    console.log("server is running..");
});


module.exports = app;














// var express = require('express');
// var bodyParser = require("body-parser");
// var app = express();

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// const postsData = require('./controllers/usersController')
// app.use('/', postsData)
// app.listen(5001, function () {
//     console.log('Server is running..');
// });  
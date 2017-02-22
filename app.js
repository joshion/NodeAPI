var express = require("express");
var Student = require("./lib/db_schema").Student_Model;
var users_router = require("./lib/users");
var app = express();

var api_router = express.Router();

api_router.use(function(req, res, next){
   console.log(req.url);
   next();
});

app.use(express.static('public'));
app.use('/api', api_router);
api_router.use('/users', users_router);

app.listen(80, function(){
    console.log("Server listen on 1337..."); 
});


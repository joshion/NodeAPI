var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/data/test1");
var db = mongoose.connection;

db.on("error", function(error){
    console.log("connect failure!!! " + error);
});

db.on("open", function(){
    console.log("connect successedly");
});


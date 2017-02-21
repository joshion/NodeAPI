var Student = require("./db_schema").Student_Model; 
var express = require('express');
var users_router = express.Router();

users_router.use(function(req, res, next){
    console.log(req.url);
    next();
})

users_router.get('/', function(req, res){
    res.send("hellworld");
});

// Create
users_router.post('/name/:name/phone/:phone', function(req, res){
    var student1 = new Student({
        id: 1,
        name: req.params.name,
        phone: req.params.phone
    });
    student1.save(function(err){
        console.log("save " + req.params.name + " successed.");
        res.send("post successed.");
    });
});

// Retrieve
users_router.get('/:name', function(req, res){
    
    Student.find({name: req.params.name}, function(err, docs){
        if (err)
        {
            console.log(err);
            res.send("get failure.");
        }
        else
        {
            console.log(req.params.name + "'s phone: " + docs[0].phone);
            console.log("get " + req.params.name + " successed");
            res.send("get successed.\n" + req.params.name + "'s phone: " + docs[0].phone);
        }
    });
});

// Update
users_router.put('/name/:name/phone/:phone', function(req, res){
    Student.update({name: req.params.name}, {phone: req.params.phone}, function(err){
        if (err)
        {
            console.log("ERROR: " + err);
            console.log("put failure");
        }
        else
        {
            console.log("update " + req.params.name + "'phone successed.");
            res.statusCode = 204;
            res.send("put successed.");
        }
    });
});

// Delete
users_router.delete('/name/:name', function(req, res){
    Student.find({name: req.params.name}, function(err, docs){
        if (!docs.length)
        {
            res.send({error: 'Not found.'});
        }
        else
        {
            Student.remove({name: req.params.name}, function(err){
                if(err)
                {
                    console.log("ERROR: " + err);
                    res.statusCode = 500;
                    res.send({error: "Server error."});
                }
                else
                {
                    console.log("delete " + req.params.name + " successed.");
                    res.send("delete successed");
                }
            });
        }
    });
});

module.exports = users_router;

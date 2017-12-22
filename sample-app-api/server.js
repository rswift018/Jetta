var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/sample-app');

var User = require('./models/user');
var Group = require('./models/group');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/user', function(req, res) {
    User.find({},function(err, users) {
        if (err) {
            res.status(500).send({error: "Could not fetch users"});
        } else {
            res.send(users);
        }
    });
});

app.post('/user', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save(function(err, savedUser) {
       if (err) {
           res.status(500).send({error:"Could not save User"});
       } else {
           res.send(savedUser);
       }
    });
});

app.get('/group', function(req, res) {
    Group.find({},function(err, groups) {
        if (err) {
            res.status(500).send({error: "Could not fetch groups"});
        } else {
            res.send(groups);
        }
    });
});

app.post('/group', function(req, res) {
    var group = new Group();
    group.title = req.body.title;
    group.description = req.body.description;
    group.save(function(err, savedGroup) {
       if (err) {
           res.status(500).send({error:"Could not save Group"});
       } else {
           res.send(savedGroup);
       }
    });
});

app.listen(3000, function(){
    console.log('Running on port 3000');
})
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/sample-app');

var User = require('./models/user');

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

app.listen(3000, function(){
    console.log('Running on port 3000');
})
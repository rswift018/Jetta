var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var user = new Schema({
    username: String,
    password: String,
    email: String,
    groups: [{type: ObjectId, ref: 'Group'}]
});

module.exports = mongoose.model('User', user);
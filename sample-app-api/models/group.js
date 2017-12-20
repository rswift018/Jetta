var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var group = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Group', group);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    username:  String,
    password: String
});
module.exports = mongoose.model('user', blogSchema) //Blog 为创建的表名
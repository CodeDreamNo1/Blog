
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({ //定义表结构
    username:  String,
    password: String
});
module.exports = mongoose.model('User', blogSchema) //Blog 为创建的表名在数据库中对应的映射为blogs
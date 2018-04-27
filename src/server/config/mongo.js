var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var database = 'blon';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbobj = db.db(database);
  console.log('数据库成功连接');
  module.exports = dbobj;
});
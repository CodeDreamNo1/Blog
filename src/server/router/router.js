var express = require('express');
var router = express.Router();
var db = reqeire('../config/mongo');
const jwt = require('jsonwebtoken');
const tokenS = 'gys';
const token = jwt.sign(
    {
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2),//签署2小时token
        name: 123
    },
    tokenS,
    // ,{
        // expiresIn: 300 //60秒到期时间
    // }
);
// view engine setup
// router.all('*',function (req, res, next) {
//     jwt.verify(token, tokenS, function (err, decoded) {
//         if (!err){
//             next(); //会输出gys，如果过了60秒，则有错误。
//         } else {
//             res.redirect('#/login'); //token过期
//         }
//     })
// })
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({'user':db.user.find()})
    // res.sendFile('../views/index.html');
});
router.get('/login',function (req,res,next) {
    let checkInfo = db.user.findOne({"username": req.query.user, "password": req.query.pass});
    console.log(checkInfo,3);
    if(req.query.user === '123' && req.query.pass === '123'){
        
        res.cookie('token',token);
        res.end();
    } else {
        res.send('用户名密码错误');
    }
})
router.get('/c',function (req,res,next) {
     console.log('未过期')
    res.end();
})
module.exports = router;
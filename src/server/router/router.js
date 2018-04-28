var express = require('express');
var router = express.Router();
var BlogModel = require('../model/login')
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
    res.sendFile('../views/index.html');
});
router.get('/login', async function (req,res,next) {
    //console.log(BlogModel)
    // var post = {            //新增数据必须定义数据model层定义数据结构(Schema)
    //     username : 'aaa',
    //     password: '111'
    // }
    // var blog = new BlogModel(post)
    // await blog.save()
    console.log(req.query)
    const posts = await BlogModel.find({username: req.query.username, password: req.query.password});
    console.log(posts);
    return res.json(posts)
    // let checkInfo = db.collection('user').findOne({"username": req.query.user, "password": req.query.pass});
    // console.log(checkInfo,3);
    // if(req.query.user === '123' && req.query.pass === '123'){n
        
    //     res.cookie('token',token);
    //     res.end();
    // } else {
    //     res.send('用户名密码错误');
    // }
})
router.get('/c',function (req,res,next) {
     console.log('未过期')
    res.end();
})
module.exports = router;
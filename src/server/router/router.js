var express = require('express');
var router = express.Router();
var BlogModel = require('../model/login')
const jwt = require('jsonwebtoken');
const tokenS = 'gys';
// view engine setup
router.all('/^(?!\/login).*$/',function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, tokenS, function (err, decoded) {
        if (!err){
            console.log(111111111111111111);
            next(); //会输出gys，如果过了60秒，则有错误。
        } else {
            res.redirect('#/'); //token过期
        }
    })
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('../views/index.html');
});
router.post('/login', async function(req, res, next) {
    //console.log(BlogModel)
    // var post = {            //新增数据必须定义数据model层定义数据结构(Schema)
    //     username : 'aaa',
    //     password: '111'
    // }
    // var blog = new BlogModel(post)
    // await blog.save()
    const posts = await BlogModel.findOne({"username": req.body.username, "password": req.body.password});
    
    if (posts) {
        console.log('开始研制')
            var token = jwt.sign(
                {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2),//签署2小时token
                    name: 123
                },
                tokenS,
                // ,{
                    // expiresIn: 300 //60秒到期时间
                // }
            );
            res.cookie('token',token);
            res.end();
    } else {
        console.log('开')
        res.headers['COOKIE'] = null;
        res.headers['STATUS'] = 403
        res.end();
    }
})
router.get('/c',function (req,res,next) {
     console.log('未过期')
    res.end();
})
module.exports = router;
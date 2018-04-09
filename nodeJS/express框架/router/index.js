/**
 * Created by Administrator on 2018/2/26.
 */
//引入express框架
var express=require("express")
var fs=require("fs")
//创建express的路由句柄
var router=express.Router();

router.post("/reg",function (req,res) {
    // 前台通过post 的方式传输过来的数据通过req.body来接收
    // 但是req.body依赖于body-parser插件必须下载这个插件
    //下载 npm i -S body-parser
    // console.log(req.body)
    var json=JSON.stringify(req.body)
    fs.writeFile("post.json",json,function (err) {
        if(err){
            res.send("注册失败")
        }else{
            res.send("注册成功")
        }
    })
})
router.post("/login",function (req,res) {
    fs.readFile("post.json","utf-8",function (err,data) {
        if(err){
            res.send("服务器错误")
        }else{
            var json=JSON.parse(data);
            console.log(json)
            console.log(req.body)
            if(json.username==req.body.username&&json.pass==req.body.pass){
                res.send("登录成功")
            }else{
                res.send("账号或密码错误")

            }
        }
    })
})
router.post("/ajax",function (req,res) {
    fs.readFile("post.json","utf-8",function (err,data) {
        if(err){
            res.send(err)
        }else{
            var json=JSON.parse(data);
            res.send(json)
        }
    })
})
module.exports=router;
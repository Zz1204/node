/**
 * Created by Administrator on 2018/2/27.
 */
//引入框架
var express=require("express");
var fs=require("fs")
//创建一个路由句柄
var router=express.Router();
//处理逻辑
router.get("/login",function (req,res) {
    fs.readFile("person.json","utf-8",function (err,data) {
        if(err){
            throw err;
        }else{
            var json=JSON.parse(data);
            if(req.query.username==json.username&&req.query.pass==json.pass){
                res.send("登录成功")
            }else{
                res.send("登录失败")
            }
        }

    })
});

router.get("/reg",function (req,res) {
    var json=JSON.stringify(req.query)
    fs.writeFile("person.json",json,function (err) {
        if(err){
            console.log("写入失败")
        }else{
           res.send("注册成功")
        }
    })
})
router.get("/ajax",function (req,res) {
    fs.readFile("person.json","utf-8",function (err,data) {
        if(err){
            throw err;
        }else{
            var json=JSON.parse(data)
            res.send(json)
        }
    })
})


module.exports=router;
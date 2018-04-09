/**
 * Created by Administrator on 2018/2/28.
 */
var express=require("express");
var fs=require("fs");
// var db=require("./db");
var db1=require("./db1")
//创建路由句柄
var router=express.Router();
router.post("/reg",function (req,res) {
            var username=req.body.username;
            var pass=req.body.pass;
            var name=req.body.name;
            var phone=req.body.phone;
            var sqlstr=`insert into login (username,pass,name,phone) values ("${username}","${pass}","${name}","${phone}")`;
            db1(sqlstr,function (result) {
                res.send("注册成功")
            })
            // db.insert([req.body.username,req.body.pass,req.body.name,req.body.phone],function (result) {
            //     res.send("注册成功")
            // })
})
router.post("/login",function (req,res) {
    var username=req.body.username;
    var pass=req.body.pass;
    var sqlstr=`select * from login where username="${username}" and pass="${pass}"`;
    db1(sqlstr,function (result) {
        console.log(username)
        console.log(result)
        if(result.length==0){
            res.send("账号或密码错误")
        }else{
            res.send("登录成功")
        }
    })
    // db.select([req.body.username,req.body.pass],function (result) {
    //    if(result.length==0){
    //        res.send("账号或密码错误")
    //    }else{
    //        res.send("登录成功")
    //    }
    //
    // })
})
router.post("/user",function (req,res) {
   var username=req.body.username;
    var sqlstr=`select * from login where username="${username}"`;
    db1(sqlstr,function (result) {
        console.log(result)
        if(result.length==0){
            res.send("✔")
        }else{
            res.send("账号存在请重新输入")
        }
    })
})
//暴露
module.exports=router
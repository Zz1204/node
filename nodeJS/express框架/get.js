/**
 * Created by Administrator on 2018/2/26.
 */
//express中get方式进行传输数据
var express=require("express");
var fs=require("fs")
//初始入口函数
var app=express();
//监听的端口号
app.listen(3000,function () {
    console.log("服务器启动成功")
})
//get 方式进行接收
app.get("/index",function (req,res) {
    //get方式进行接收数据存在 req.query
    console.log(req.query);
    //把得到的前台数据对象转化成字符串
    //json 类型
    // 对象转字符串 JSON.stringify()；
    // 字符串转对象 JSON.parse();
    var json=JSON.stringify(req.query)
    fs.appendFile("person.json",json,function (err) {
        if(err){
            res.send("注册失败")
        }else{
            res.send("注册成功")
        }
    })
})
app.get("/login",function (req,res) {
  fs.readFile("person.json","utf-8",function (err,data) {
      if(err){
         res.send("服务器错误，请重试")
      }else{
          var json1=JSON.parse(data)
         if(req.query.username==json1.username&&req.query.pass==json1.pass){
              res.send("登录成功")
         }else{
             res.send("账号或密码错误")
         }
      }
  })
})
//静态资源托管
app.use(express.static("public"))
// express框架  nodejs的再次封装
// 如何使用 express框架 需要进行安装 npm install -S express



// 1.先引入express框架
var express=require("express");
// var fs=require("fs")
//2.初始一个express入口函数
var app=express();
//3.设置监听的端口号 .listen(端口号，回调函数（非必填项）)
app.listen(9999,function () {
    console.log("服务器以启动")
})
//中间件 use(匹配路径,回调函数（re,re,next） ) = req.url()  默认匹配路径 /
//next()必须放在send（）前面
//express 框架中 向前台返回数据 用 send（）

// app.use("/index",function (req,res) {
//     res.send("我是index返回的数据")
// })
// app.use("/",function (req,res) {
//     // res.send("我是后台返回的数据");
//
//
//
// })
//加载静态资源托管
app.use(express.static("public",{"index":"get.html5"}))
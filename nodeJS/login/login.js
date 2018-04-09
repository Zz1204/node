//引入框架和文件
var express=require("express");
var fs=require("fs");
var router=require("./router");
var bodyParser=require("body-parser")
//初始化端口
var app=express();
//设置处理的数据格式
app.use(bodyParser.json());
//设置编码格式
app.use(bodyParser.urlencoded({extended:true}))

//监听端口

app.listen(3000,function () {
    console.log("服务器启动")
})
//静态托管
app.use(express.static("public"));
//处理逻辑
app.use(router)

/**
 * Created by Administrator on 2018/2/28.
 */
//引入框架及文件加插件
var express=require("express");
var fs=require("fs");
var router=require("./router")
//初始入口函数
var app=express();
//监听端口号
app.listen(3000,function () {
    console.log("服务器启动")
})
//使用逻辑
app.use(router);
//静态托管
app.use(express.static("public"));
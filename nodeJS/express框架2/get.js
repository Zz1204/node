/**
 * Created by Administrator on 2018/2/27.
 */
//引入框架
var express=require("express");
var fs=require("fs");
//引入router文件（处理逻辑）；
var router=require("./router");
//初始化端口
var app=express();
//监听端口号
app.listen(3000,function () {
    console.log("服务器以启动")
});
//使用路由文件
app.use(express.static("public"));
app.use(router);
/**
 * Created by Administrator on 2018/2/26.
 */
//引入express框架及插件
var express=require("express");
var fs=require("fs");
var router=require("./router")
//body-Parser
var bodyParser=require("body-parser");
//初始化端口
var app=express();
//设置处理的数据类型
app.use(bodyParser.json())
//设置编码格式
app.use(bodyParser.urlencoded({extended:true}))
//设置监听的端口
app.listen(3000,function () {
    console.log("服务器启动")
})
//加载静态资源托管
app.use(express.static("work"));
app.use(router)
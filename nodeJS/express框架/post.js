/**
 * Created by Administrator on 2018/2/26.
 */
//express 框架 post 方式提交处理
var express=require("express");
var fs=require("fs")
//引入body-parser
var bodyParser=require("body-parser")
//初始化端口
var app=express();
//设置处理的数据格式
app.use(bodyParser.json())
//设置编码格式
app.use(bodyParser.urlencoded({extended:true}))
//3.设置监听的端口号 .listen(端口号，回调函数（非必填项）)
app.listen(3000,function () {
    console.log("服务器启动")
})
var router=require("./router")
////加载静态资源托管
app.use(express.static("work"))
app.use(router);
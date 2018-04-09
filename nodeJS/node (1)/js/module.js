//module  模块
//1.什么叫模块？      一个文件就是一个模块
//淘宝  搜索   支付  购物车.....最后整合到一起    有利于后期代码维护
//网页 包含 很多文件 (模块)   模块里面他可以包含很多组件
//模块 下面有很多暴露功能
//module.exports   暴露 原理是commonJS方法
//exports   暴露    原理node
//接收   require(文件的路径)
//如果同时暴露多个情况下需要进行区分 从这个对象下面去加属性就可以了

//3种模块
//1.内置模块		(自带的)   node中最重要的2个   fs模块    文件系统模块   http模块 系统服务模块 搭建自己的服务器
//2.第三方模块		(下载的包  bootstrap jquery....)
//3.我们自定义的模块  	(自己写的js)

//引入 fs模块
var fs=require("fs");
//如何读取文件 readFile(读取文件的路径，编码格式，回调函数(err(读取失败时返回的信息),data(读取成功时的信息)))
// fs.readFile("1.txt","utf-8",function(err,data){
//	if(err){
//		console.log("读取失败");
//		console.log(err);
//	}else{
////		console.log(data)
////		add(data);
//		fs.writeFile("2.txt",data,function(err){
//			if(err){
//				console.log("写入失败")
//			}else{
//				console.log("写入成功")
//			}
//		})
//	}
//})

//写入文件writeFile(写入的文件名称,写入的数据,回调函数(err))
//特点1.假设你写入的文件不存在 他会自己去创建并写入
//特点2.如果文件存在,写入的时候执行覆盖式的写入


//function add(a){
//	fs.writeFile("2.txt",a,function(err){
//	if(err){
//		console.log("写入失败")
//	}else{
//		console.log("写入成功")
//	}
//})
//}
    
//追加写入appendFile(写入的文件名称,写入的数据,回调函数(err))
//fs.appendFile('2.txt',"，群魔乱舞乱天下",function(err){
//	if(err){
//		console.log("追加失败")
//	}else{
//		console.log("追加成功")
//	}
//})
//删除文件unlink(删除文件路径,回调函数(err))
//fs.unlink("2.txt",function(err){
//	if(err){
//		console.log("删除失败")
//	}else{
//		console.log("删除成功")
//	}
//})















//var add=function(a,b){
//	return a+b;
//	
//}
//module.exports=add;


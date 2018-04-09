//http 模块 nodejs 中的内置模块
var http=require("http");
var fs=require("fs")
//开始创建服务器createServer(回调函数（req请求数据，res响应对象）)
//网址的构成:http//:www.baidu.com
//http 传输协议   https 加密传输协议
//www.baidu.com  域名  主机  本地 localhost 127.0.0.1
//端口号 3000以下的端口不要用   监听端口号  listen

http.createServer(function(req,res){
	//向前台返回数据  end()
//	res.end("hellow wode")
//请求对象路径req  请求的路径  默认请求斜杠/
//	console.log(req.url)
//	if(req.url=="/"){
//		res.end("hello world")
//	}else if(req.url=="/index"){
//		res.end("index.html")
//	}
	if(req.url=="/"){
		//加载index.html
		fs.readFile("index.html","utf-8",function(err,data){
			if(err){
				console.log(err)
			}else{
				//向前台发送界面数据
				res.end(data)
			}
		})
	}else if(req.url=="/get"){
		fs.readFile("get.html","utf-8",function(err,data){
			if(err){
				console.log(err)
			}else{
				//向前台发送界面数据
				res.end(data)
			}
		})
	}
}).listen(9000)

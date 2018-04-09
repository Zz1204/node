var http=require(l"http");
var fs=require("fs")
http.createServer(function(req,res){
	//直接返回img标签没有解析   说明没有设置头信息
	//writeHead(http状态码，content-type:头部格式) 方法就是用来设置头部信息2个参数
	//http状态码  404找不到   200请求成功   304读取缓存锡信息   500服务器错误
//	网页存在src link href script
//	res.writeHead(200,{"content-type":"image/png"})
//	res.end("<img scr='a2.png'/>")
console.log(req.url)
if(req.url=="/"){
	fs.readFile("http.html","utf-8",function(err,data){
		if(err){
			console.log(err)
		}else{
			res.end(data)
		}
		})
	}else if(req.url=="/img/a2.png"){
			fs.readFile("../img/a2.png",function(err,data){
				if(err){
					console.log(err)
				}else{
					res.writeHead(200,{"content-type":"image/png"})
					res.end(data)
				}
			})
		}
		
}).listen(8888)

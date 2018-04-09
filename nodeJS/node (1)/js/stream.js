//读取流 createReadStream()    每64K一个文件大小
//写入流createWriteStream()
var fs=require("fs");
var i=1;
var rs=fs.createReadStream("1.txt");
rs.on("data",function(data){
//	console.log(data)
	fs.writeFile("stream"+i+".txt",data,function(err){
		if(err){
			console.log("分流失败")
		}else{
			console.log("分流成功")
		}
	})
	i++;
})

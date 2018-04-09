var fs=require("fs");
//fs.mkdir("jq",function(err){
//	if(err){
//		console.log("创建失败")
//	}else{
//		console.log("创建成功")
//	}
//	
//})
//fs.rmdir("jq",function(err){
//	if(err){
//		console.log("删除失败")
//	}else{
//		console.log("删除成功")
//	}
//	
//})

//readdir只能读取子级的内容
//fs.readdir("jq",function(err,files){
//	if(err){
//		console.log(err)
//	}else{
//		//forEach(function(item(所有的子级),index(下标)))循环数组  files是所有的子级 以数组的形式存在
//		files.forEach(function(item,index){
////			console.log(item)
//			var path="jq/"+item;
////			stat检查文件的状态
//			fs.stat(path,function(err,stats){
//				if(err){
//					console.log(err)
//				}else{
////					stats文件的每一个状态   判断文件stats.isFile   判断文件夹   stats.isDirectory
//					if(stats.isFile()){
//						console.log(path+"是个文件")
//					}else {
//						console.log(path+"是个文件夹")
//					}
//				}
//			})
//		})
//	}
//})
fs.readdir('jq',function(err,files){
	if(err){
		console.log(err)
	}else{
		console.log(files)
		var path='jq/'+files[4];
		fs.readdir(path,function(err,files){
			if(err){
				console.log(err)
			}else{
				files.forEach(function(item){
					var path1=path+"/"+item;
					fs.stat(path1,function(err,stats){
						if(err){
							console.log(err)
						}else{
							if(stats.isFile()){
								console.log(path1+"是个文件")
							}else{
								console.log(path1+"是个文件夹")
							}
						}
					})
				})
			}
		})
	}
})

//console.log("hello world");
//console.log(global);
//进程 process  argv() 数组 进行接收参数
//数组的下标为0的这项:node.exe 这个运行程序
//数组的下标的1的这样:当前文件的路径
//从下标为2开始就是所传的参数
//console.log(process.argv)

j

var add1=require("./模块");
console.log(add1(10,20));
//add(process.argv[2],process.argv[3])
//function fang(a,b){
//	console.log(Math.pow(a,b))
//}
//fang(process.argv[2],process.argv[3])

//console.log(__dirname)   当前文件所在的文件夹
//console.log(__filename); 当前文件的路径
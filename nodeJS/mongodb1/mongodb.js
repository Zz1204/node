
//引入
var mdb=require("./mdb");
//查询
// mdb("find","ten",{},function (result) {
//     console.log(result)
// })
//添加
// mdb("insert","ten",{name:"gxx",age:15,sex:"男",hobby:"游戏"},function (result) {
//     console.log(result)
//     if(result.result.n==1){
//         console.log("出入成功")
//     }
// })
// 删除
// mdb("delete","ten",{hobby:"电影"},function (result) {
//    if(result.result.n==1){
//        console.log("删除成功")
//    }else{
//        console.log("删除失败")
//    }
// })
//修改
mdb("update","ten",[{job:"WEB"},{$set:{name:"郭锡坤"}}],function (result) {
    console.log(result)
})
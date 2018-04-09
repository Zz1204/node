/**
 * Created by Administrator on 2018/2/24.
 */
var http=require("http");
var fs=require("fs")
http.createServer(function (req,res) {
    if(req.url=="/"){
        fs.readFile("zuo1.html", "utf-8", function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.end(data)
            }
        })
    }else if(req.url=="/zuo2"){
        fs.readFile("zuo2.html", "utf-8", function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.end(data)
            }
        })
    }
    else if(req.url=="/img/1.jpg"){
        fs.readFile("./img/1.jpg", "utf-8", function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(200,{"content-type":"image/jpeg"})
                res.end(data)
            }
        })
    }
}).listen(7777)
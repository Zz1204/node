/**
 * Created by Administrator on 2018/2/27.
 */
// 数据库 :存放数据的
// 数据库>表>行/列
// 启动mysql数据库   net start  mysql57
//停止 net stop mysql57

// 进入mysql数据库    -u(username账号）-p(password密码)  -P(端口号 默认是3306) -h主机地址如果是默认是localhost 就不用写
// mysql -u -p -P -h
// 进入cmd必须用管理员的身份进入
// 1.显示数据库：show databases;
// 2.创建数据库 :create database web;
// 3.删除数据库 ：drop database web;
//4.进入指定数据库：use 数据库名称
//5.创建数据表：create table 表名 (字段的名称(name,age,job) 数据的类型{
// 数字{
//     tinyint: 0-255 整数
//     int：0-2^31次方
// }，
// 时间日期{
//     datetime类型:2018-02-27 11:44:23
//     data类型:2018-02-27的格式
// }，
// 字符串{
//   char:char(20)表示可以超过20位
//   varchar:varchar(20)表示最多20位:
//
// }
// })
// 6.查看数据中指定数据表的表头 desc 表名
// 7.查看数据库中的数据表 show tables;
// 8.删除数据表 drop table 表名；
//增删改查
// 增：insert into 表名 (name,age,sex,job) values (gxk,20,"男"，IT),(ZH,21,"女","窑子")；
// 删：delete from 表名 where 字段=值  and 字符=值 or..
// 改：update 表名 set 字段=值 where 字段=值
// 查：select * from 表名
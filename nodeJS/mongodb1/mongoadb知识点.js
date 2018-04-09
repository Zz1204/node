//1. mongodb启动  net start mongodb
//        停止  net stop mongodb
//        注意：你只要开启了一次mongodb,他就一直运行，（启动一次就可以）
//        如何进入mongodb的客户端 ：mongo
//        启动cmd 时用管理员的身份运行
// 2.mongodb区别于mysql
// mysql 关系类型的数据库   数据库>数据表>行/列
// mongodb非关系的数据库  数据库>集合>（bson){} 大量类似于json格式
// 3.学习指令
// 查看mongodb 数据库 show dbs (databases)
// 创建和使用 use 数据库名称 刚开始的时候因为没有内容用 show dbs 查看 查看不到
// 如果想要查看到就要从这下面创建集合
// 创建集合db.createCollection("集合名称")；
// 查看当前使用的那个数据库   db
//删除数据库 db.dropDatabase()


 // 对于集合的操作
 // db.createCollection("集合名称")
 // 数据库可以存放多个集合
 // 查看数据库中的集合 show tables/collections
 // 删除集合 db.集合名称.drop()

//
//
//  *****AAAAA 级别
// 增：db.集合名称.insert({key:value})   假设没有创建集合 db.ten.insert({name:"gxk"})如果不存在ten会直接创建ten
// 删：
// 1.全部删除db.集合名称.remove({})
// 2.条件性删除db.集合名称.remove({key:""});
//
// 改：
// db.集合名称.update({条件}，{修改内容(修改器修改)，true,true}) 第三和四默认是fasle 如果第三个参数是true 如果没有找到符合条件的
// 他会添加操作 如果第四个为true 如果匹配多个 会进行批量修改如果为false只会修改第一个符合条件的
// 查：db.集合名称.find()
// 格式化db.集合名称.find().pretty(）
//
// 带符号的查询  db.集合的名称.find()  查看集合下所有的数据
// 条件查询  db.集合名称.find({key:value})
// 分页：
// 小于为$lt
// 大于$gt
// 不等于$ne
// 大于或等于$lte
// 小于或等于$gte
//1
use ProductDB2
//2
db.products.drop()
db.products.insert([
    {productName: 'ipad',price:200,ImportedDate:new Date("2020-08-16"),color:'blue'} ,
    {productName: 'IMac',price:800,ImportedDate:new Date("2020-07-12"),color:'red'},
    {productName: 'SS galaxy',price:122,ImportedDate:new Date("2020-08-7"),color:'blue'},
    {productName: 'Mouse',price:12,ImportedDate:new Date("2020-4-1"),color:'gray'},
    {productName: 'Backpack',price:20,ImportedDate:new Date("2020-9-16"),color:'blue'}
])
db.products.find()
//3
db.products.find({color:'blue'})
//4
db.products.find({price :{$gt:300, $lt:6000}})
//5
db.products.find({price :{$gt:30, $lt:6000}}).sort({price:-1})
//6
db.products.updateMany({},{$inc:{price:20}})
//7
db.products.remove({price: {$lt: 300}})
//8
db.products.aggregate([
    {$project: {productName:1,price:1,m :{$month: '$ImportedDate'}}},
    {$match: {m:8}}
])



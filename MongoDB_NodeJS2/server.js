var express = require('express')
var hbs = require('hbs')

var app= express()
app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials')

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://tommy:112233445566@cluster0.lkrga.mongodb.net/test';  

app.get('/', async (req,res)=>{
    let client= await MongoClient.connect(url);
    let dbo = client.db("ProductDB2");
    let results = await dbo.collection("products").find({}).toArray();
    res.render('index',{model:results})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log('Server is running')
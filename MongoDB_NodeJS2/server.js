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
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/search',(req,res)=>{
    res.render('search')
})

app.get('/insert',(req,res)=>{
    res.render('insert')
})
app.post('/doSearch',async (req,res)=>{
    let nameSearch = req.body.txtSearch;
    let client= await MongoClient.connect(url);
    let dbo = client.db("ProductDB2");
    let results = await dbo.collection("products").find({productName:nameSearch}).toArray();
    res.render('index',{model:results})
})

app.post('/doInsert',async (req,res)=>{
    let nameInput = req.body.txtName;
    let colorInput = req.body.txtColor;
    let priceInput = req.body.txtPrice;
    let newProduct = {
        productName : nameInput,
        price: priceInput,
        color: colorInput
    }
    let client= await MongoClient.connect(url);
    let dbo = client.db("ProductDB2");
    await dbo.collection("products").insertOne(newProduct);
    res.redirect('/')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log('Server is running')
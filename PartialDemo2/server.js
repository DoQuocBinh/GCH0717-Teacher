var express = require('express')
var hbs = require('hbs');
const app = express()

app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials')

app.get('/home',(req,res)=>{
    res.render('home',
    {
        pageTitle: 'Home Page', //displayed in header
        getCurrentYear: new Date().getFullYear() //displayed in footer
    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server is running!')
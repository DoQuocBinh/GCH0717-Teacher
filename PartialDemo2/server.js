var express = require('express')
var hbs = require('hbs');
const app = express()

app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials')


app.get('/home',(req,res)=>{
    res.render('home',
    {
        pageTitle: 'Home Page', //displayed in header
        getCurrentYear: new Date().getFullYear(), //displayed in footer
        welcomeMessage: 'Happy New Year'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',
    {
        pageTitle: 'About page',
        getCurrentYear: 2040,
        technicalName: 'Do Quang Long'
    })
})
const fs = require('fs')
const fileName = 'user.txt'
hbs.registerHelper('findUser',(userName)=>{
    let content = fs.readFileSync(fileName,'utf8')
    let users = content.split('/');
    users.shift();//the first element is empty so remove it
    let foundUser = false;
    console.log(users.length)
    for(i =0;i<users.length;i++){
        if(users[i]==userName){
            foundUser = true;
            break;
        }
    }
    return foundUser;
})

hbs.registerHelper('screamIt',(msg)=>{
    return msg.toUpperCase();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server is running!')
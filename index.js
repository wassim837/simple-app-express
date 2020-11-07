const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('style'))
app.use('/style', express.static(__dirname + 'style'))

app.get('/',out ,(req,res)=>{
    res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body>' +
    '<div class="nav"><ul><li><a href="/">Home</a><li><li><a href="/services">Services</a><li><li><a href="/contact">Contact</a><li></ul></div>' +
    '<div class="main"><h1>Home</h1><h5> this is a home page.</h5></div>' +
    '</body></html>')
})

app.get('/services', out, (req,res)=>{
    res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body>' +
    '<div class="nav"><ul><li><a href="/">Home</a><li><li><a href="/services">Services</a><li><li><a href="/contact">Contact</a><li></ul></div>' +
    '<div class="main"><h1>Services</h1><h5> this is a service.</h5></div>' +
    '</body></html>')
})

app.get('/contact', out, (req,res)=>{
    res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body>' +
    '<div class="nav"><ul><li><a href="/">Home</a><li><li><a href="/services">Services</a><li><li><a href="/contact">Contact</a><li></ul></div>' +
    '<div class="main"><h1>Contact</h1><h5>email:</h5>wassimmokhtar92@gmail.com<h5>phone:</h5>52004665</div>' +
    '</body></html>')
})

function out(req,res,next){
    let today = new Date()
    if(today.getDay()!== (6 && 0) && (today.getHours()>=9 && today.getHours()<=17)){
        next()
    } else {
        res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body>' +
        '<div class="nav"><ul><li><a href="/">Home</a><li><li><a href="/services">Services</a><li><li><a href="/contact">Contact</a><li></ul></div>' +
        '<div class="main"><p>Sorry we are currently closed. Try during weekdays between 9am and 5pm.</p></div>' +
        '</body></html>')
    }
}
app.listen(port,()=>{
     console.log(`Listening to requests on http://localhost:${port}`);
})
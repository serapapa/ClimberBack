var express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let community = require("./router/community")
app.use('/community',community)

var chat = require('./router/chat.js');
app.use('/chat',chat);


app.post('/',function(req,res,next){

})
app.get('/', function(req,res,next){
    res.json("룰루루")
})
app.listen(31000, ()=> console.log("Server listneing to port : "+31000));
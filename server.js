var express = require('express');// 간단한 서버 모듈이라고 생각하면 된다.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
let community = require("./router/community")
app.use('/community',community)
app.post('/',function(req,res,next){
})
app.get('/',function(req,res,next){
    res.json()
})
*/
let board=require("./router/board");
app.use('/board', board);
app.get('/', function(req,res,next){
    res.json()})
app.post('/', function(req,res,next){});
app.put('/', function(req,res,next){});
app.delete('/', function(req,res,next){});


app.listen(31000, ()=> console.log("Server listneing to port : "+31000));
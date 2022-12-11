var express = require('express');// 간단한 서버 모듈이라고 생각하면 된다.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let community = require("./router/community")

app.use('/community',community)
//var user = require('./router/userRouter.js');
//app.use('/user',user);


app.post('/',function(req,res,next){

})
app.listen(31000, ()=> console.log("Server listneing to port : "+31000));
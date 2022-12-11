var express = require('express'); // 간단한 서버 모듈이라고 생각하면 된다.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//var user = require('./router/userRouter.js');
//app.use('/user',user);


app.get('/',function(req,res,next){
  res.json({test:"connect test"})
})
app.listen(31000, ()=> console.log("Server listneing to port : "+31000));
let express = require('express');
let  router = express.Router();
let community = require('../controller/community')

router.get( '/' , (req,res)=>{
    res.json({"reuslt":"resultewt"})
})

router.post( '/list/get' ,community.getBoardList)

router.get('/list',(req,res)=>{
    res.json({"te":"st"})
}
)


module.exports = router;

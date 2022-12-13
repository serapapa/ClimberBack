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


// 암장관리자 글(광고, 이벤트)
/*
router.get('/centermakeBoard',(req,res)=>{
    res.json(
        {"USER_NO":"user_no",
        "POST_CONT":"post_cont",
        "POST_DATE":"post_date",
        "POST_TYPE":"post_type"}        
    )
})
*/


module.exports = router;
let express = require('express');
let  router = express.Router();
let board=require('../controller/board');

// (메모)객체의 이름만 앞에 대문자!

// 게시글 메인 화면..?
/*router.get( '/' , (req,res)=>{
    res.json({
        "POST_NO":"post_no"
    })
})*/


// 게시글 메인화면
router.get('/',board.showMainBoard)

// 이미지업로드
router.post('/uploadimg', board.uploadImg)

// 게시글 작성
router.post('/make' ,board.makeBoard)

// 게시글 수정하기
router.put('/edit',board.editBoard)

// 게시글 지우기
router.delete('/delete', board.deleteBoard)

// 하트클릭
router.post('/heart',board.updateHeart)

// 게시글 고정 - 해제
router.post('/fixed',board.fixedBoard)

// 게시글에 덧글 작성
router.post('/reply', board.addReply)


module.exports = router;
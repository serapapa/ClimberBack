let board = new Object();
const { query } = require("express");
let model = require("../model/board")


// 게시글 메인화면
board.showMainBoard=(req,res)=>{
    /*res.json({
        "POST_NO":"post_no",
        "POST_TITLE":"post_title",
        "POST_CONT":"post_cont",
        "POST_LIKE":"post_like",
        "POST_DATE":"post_date", // 글쓴날짜
        "UPDATE_DATE":"update_date", // 수정날짜
        "POST_TYPE":"post_type"       
    });*/
    model.parseShowMainBoard(req.body)
    .then((query)=>{
        res.json(query);
    })
}



// 이미지업로드
board.uploadImg=(req,res)=>{
    req.json()
}



// 게시글 작성
board.makeBoard=(req,res)=>{
    /*let user_no=req.body.user_no;
    let post_title=req.body.post_title;
    let post_cont=req.body.post_cont;
    let post_type=req.body.post_type;*/
    model.parseMakeBoard(req.body)
    // .then(db.getList)
    //.catch(catchError) 
    .then((query)=>{
        res.json(query);
    })
}



// 게시글 수정
board.editBoard=(req,res)=>{
    //let post_title=req.body.post_title;
    //let post_cont=req.body.post_cont;
    //let update_date=req.body.update_date;
    //let post_type=req.body.post_type;
    /*res.json(
        {
            "POST_TITLE":"post_title",
            "POST_CONT":"post_cont",
            "UPDATE_DATE":"update_date",
            "POST_TYPE":"post_type"
        }
    )*/
    model.parseEditBoard=(req.body)
    .then((query)=>{
        res.json(query);
    })
}



// 게시글 삭제
board.deleteBoard=(req,res)=>{
    model.parseDeleteBoard(res.body)
    .then((query)=>{
        res.json(query);
    })
}



// 하트 like가 거짓이면 하트수 증가, 아니면 감소.
board.countHeart=(req,res)=>{
    res.json()
/*
    if(!like){
        post_like++
    }else{
        post_like--;
    }*/
    // 모델
}



// 게시글 고정 - 해제
board.addReply=(req,res)=>{
    res.json()
    
    //모델
}



// 덧글
board.addReply=(req,res)=>{
    res.json()
    
}
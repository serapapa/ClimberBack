let board = new Object();
let model = require("../model/board")


// 게시글 메인화면
board.listBoard=(req,res)=>{
    res.json();
}



// 이미지업로드
board.uploadImg=(req,res)=>{
    req.json()
}



// 게시글 작성
board.makeBoard=(req,res)=>{
    let user_no=req.body.user_no;
    let post_title=req.body.post_title;
    let post_cont=req.body.post_cont;
    let post_type=req.body.post_type; 

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
    res.json(
        {
            "POST_TITLE":"post_title",
            "POST_CONT":"post_cont",
            "UPDATE_DATE":"update_date",
            "POST_TYPE":"post_type"
        }
    )
    // 모델자리
}



// 게시글 삭제
board.deleteBoard=(req,res)=>{
    res.json()
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


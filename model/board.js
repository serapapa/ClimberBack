let board = new Object();
// 오브젝트 하나 당 테이블 하나
// 여러 테이블에서 가져와야하면 new Object해서 처리해줘야함.


board.parseShowMainBoard=(body)=>{
  return new Promise((resolve,reject)=>{
    if(body.user_no==undefined)reject("U00001");
    let userBoard=new Object();
    userBoard.post_no=body.post_no;
    userBoard.post_cont=body.post_cont;
    userBoard.post_title=body.post_title;
    userBoard.post_type=body.post_type;
    userBoard.post_like=body.post_like;
    userBoard.user_no=body.user_no;
    userBoard.update_date=body.update_date; // 수정한 글일 경우?

    let ctrBord=new Object();
    ctrBord.ct_post_type=body.ct_post_type // 암장글일 경우?

    if(ctrBord.ct_post_type!=null){
      resolve(userBoard, ctrBord);
    }
    else{
      resolve(userBoard);
    }
      //resolve("select * from community where user_id="+body.user_no);
  })
}


board.parseMakeBoard=(body)=>{
  return new Promise((resolve,reject)=>{
    if(body.user_no==undefined) reject("U00001");
    let userMakeBoard=new Object();
    userMakeBoard.post_title=body.post_title;
    userMakeBoard.post_cont=body.post_cont;
    userMakeBoard.post_type=body.post_type;
    userMakeBoard.user_no=body.user_no;

    let ctrMakeBoard=new Object();
    ctrMakeBoard.ct_post_type=body.ct_post_type;

    if(ctrBord.ct_post_type!=null){
      resolve(userMakeBoard, ctrMakeBord);
    }
    else{
      resolve(userMakeBoard);
    }
  //data.id = body.user_no;
  //resolve ("insert into community (user_no, post_title, post_cont, post_type) values("+body.user_no+","+body.post_title+","+body.post_cont+","+body.post_type+")");
  })
}

board.parseEditBoard=(body)=>{
  return new Promise((resolve, reject)=>{
    let userEditBoard=new Object();
    userEditBoard.post_title=body.post_title;
    userEditBoard.post_cont=body.post_cont;
    userEditBoard.update_date=body.update_date;
    //userEditBoard.post_type=body.post_type; // 포스트타입 변경은 불가능으로?
    resolve(userEditBoard);
  })
}

board.parseDeleteBoard=(body)=>{
  return new Promise((resolve, reject)=>{
    if(body.user_no==undefined)reject("U00001");
    let userDeleteBoard=new Object();
    userDeleteBoard.delete_date=body.delete_date;
    resolve(userDeleteBoard);
  })
}





  module.exports = board;
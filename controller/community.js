
let community = new Object();
let model = require("../model/community")


community.getBoardList = (req,res)=>{
    console.log("test");

    model.parseGetListBody(req.body)
        // .then(db.getList)
        .then((query)=>{ 
            res.json(query);
        });
}

// 내가 쳐본거
community.makeBoard=(req,res)=>{
    console.log("controller in");
    let user_no=req.body.user_no;
    let post_title=req.body.post_title;
    let post_cont=req.body.post_cont;
    let post_type=req.body.post_type;
    

    model.parseMakeBoard(req.body)
    // .then(db.getList)
    .catch(catchError) 
    .then((query)=>{
        
        res.json(query);
    })
}


catchError = (error) =>{
    return new Promise((resolve,reject)=>{

        console.log(error);
        switch(error){
            case "U00001":
                resolve({"status":false ,"msg" : "유저 번호가 입력되지 않았습니다."})
        }
    })

}
module.exports = community;
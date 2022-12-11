
let community = new Object();
let model = require("../model/community")


community.getBoardList = (req,res)=>{
    console.log("test");

    model.parseGetListBody(req.body)
        .then(db.getList)
        .then((query)=>{ 
            res.json(result);
        });
}

module.exports = community;
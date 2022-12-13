
let community = new Object();
let model = require("../model/community")


community.getBoardList = (req,res)=>{
    console.log("test");

    model.parseGetListBody(req.body)
        .then((data)=>{ 
            res.json(data);
        });
}

module.exports = community;
let chat = new Object();
let model = require("../model/chat")

chat.getChatList = (req, res) =>{
    model.parseGetChatListBody(req.body)
    .then(db.getList)
    .then((query)=>{
        res.json(result);
    });
}
module.exports = chat;
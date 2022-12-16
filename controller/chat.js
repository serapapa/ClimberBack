let chat = new Object();
let model = require("../model/chat.js")



chat.getChatList = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.getChatView = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json("res");
    });
}


chat.getMessageView = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.findMessage = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.insertMessage = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.deleteMessage = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.deleteRoom = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}



chat.fixedChatRoom = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.selectProfile = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.insertProfile = (req, res) =>{
    model.parseGetChatListBody(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}

module.exports = chat;
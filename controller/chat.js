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
    model.parseGetChatview(req.body)

    .then((query)=>{
        res.json(query);
    });
}


chat.getMessageView = (req, res) =>{
    model.parseGetMessage(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.findMessage = (req, res) =>{
    model.parseGetMessage(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.insertMessage = (req, res) =>{
    model.parseGetMessage(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.deleteMessage = (req, res) =>{
    model.parseGetMessage(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.deleteRoom = (req, res) =>{
    model.getUserChatList(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}



chat.fixedChatRoom = (req, res) =>{
    model.getUserChatList(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.selectProfile = (req, res) =>{
    model.getFriendsList(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}


chat.insertProfile = (req, res) =>{
    model.getFriendsList(req.body)
    // .then(db.getList)
    .then((query)=>{
        res.json(query);
    });
}

module.exports = chat;
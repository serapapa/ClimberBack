let chat = new Object();

chat.parseGetChatListBody = (body) =>{
    return new Promise((resolvem, reject)=> {
        "select * from chat";
    })
}
module.exports = chat;
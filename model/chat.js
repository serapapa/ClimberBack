let chat = new Object();

chat.parseGetChatListBody = (body) =>{
    return new Promise((resolve, reject)=> {
        let query = "select * from chat";
        resolve(query);
    })
}
chat.getChatview = (body) =>{
    return new Promise((resolve, reject)=> {
        let query = "chat view";
        resolve(query);
    })
}
chat.getProfile = (body) =>{
    return new Promise((resolve, reject)=> {
        let query = "Profile";
        resolve(query);
    })
}
module.exports = chat;
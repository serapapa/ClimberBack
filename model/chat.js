let chat = new Object();

chat.parseGetChatListBody = (body) =>{
    return new Promise((resolve, reject)=> {
        let data = new Object();

        // data.변수명 = body.변수명
        
        let table1 = new Object();
        // table1.변수명 = body.변수명
        let table2 = new Object();
        // table2.변수명 = body.변수명
        // data.table1 = table1;
        // data.table2 = table2;

        resolve(data);
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
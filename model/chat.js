let chat = new Object();

chat.parseGetChatListBody = (body) =>{
    return new Promise((resolve, reject)=> {
        let usrMstr = new Object();

        usrMstr.nickName=body.nick_name;

        let chtRead = new Object();

        chtRead.chatId=body.chat_id;
        chtRead.cntUsr=body.user_no;
        chtRead.chatNoRead=body.chat_text_id;

        resolve(data);
    })
}
chat.parseGetChatview = (body) =>{
    return new Promise((resolve, reject)=> {
        
        let chtData = new Object();

        chtData.chatId=body.chat_id;
       
        resolve(query);
    })
}
chat.parseGetMessage = (body) =>{
    return new Promise((resolve, reject)=> {

        let chtData = new Object();
        
        chtData.chatId=body.chat_id;
        chtData.chatUsr=body.user_no;
        chtData.chatCont=body.chat_cont;
        chtData.chatDate=body.chat_date;

        resolve(query);
    })
}
chat.getUserChatList = (body) =>{
    return new Promise((resolve, reject)=> {

        let chtUsr = new Object();
        
        chtUsr.chatId=body.chat_id;
        chtUsr.chatUsr=body.user_no;

        resolve(query);
    })
}

chat.getFriendsList = (body) =>{
    return new Promise((resolve, reject)=> {

        let friend = new Object();
        
        friend.usrno=body.user_no;
        friend.frino=body.friend_no;

        resolve(query);
    })
}

module.exports = chat;
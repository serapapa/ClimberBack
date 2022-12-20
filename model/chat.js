let chat = new Object();

chat.parseGetChatListBody = (body) =>{
    return new Promise((resolve, reject)=> {
        let data = new Object();

        let user= new Object();
        user.user_no=body.user_no;

       data.user=user;
        resolve(data);
    })
}
chat.parseGetChatview = (body) =>{
    return new Promise((resolve, reject)=> {
        
        let data = new Object();

        let chat_data = new Object();

        chat_data.chat_id=body.chat_id;

        data.chat_data=chat_data;
       
        resolve(data);
    })
}
chat.parseGetMessage = (body) =>{
    return new Promise((resolve, reject)=> {

        let data = new Object();

        let chat_data = new Object();

        chat_data.chat_id=body.chat_id;
        chat_data.chat_user_no=body.chat_user_no;
        chat_data.chat_cont=body.chat_cont;
        chat_data.chat_date=body.chat_date;

        data.chat_data=chat_data;
       
        resolve(data);
    })
}
chat.getUserChatList = (body) =>{
    return new Promise((resolve, reject)=> {

        let data = new Object();

        let chat_data = new Object();
        
        chat_data.chat_id=body.chat_id;
        chat_data.chat_user_no=body.chat_user_no;

        data.chat_data=chat_data;
       
        resolve(data);
    })
}

chat.getFriendsList = (body) =>{
    return new Promise((resolve, reject)=> {

        let data = new Object();

        let freind = new Object();
        
        freind.user_no=body.user_no;
        freind.friend_no=body.friend_no;

        data.freind=freind;
       
        resolve(data);
    })
}

module.exports = chat;
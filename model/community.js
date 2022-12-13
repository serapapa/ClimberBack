let community = new Object();

community.parseGetListBody = (body) =>{
    return new Promise((resolve, reject)=>{
            console.log(body)

    
      "SELECT * FROM COMMUNITY WHERE USER_NO="+body.USER_NO;

    })

}

// 내가 친거
community.parseMakeBoard=(body)=>{
  return new Promise((resolve,reject)=>{
    console.log("model in ")
    console.log(body);
    let data = new Object();

    if( body.user_no==undefined) reject("U00001");
    data.id = body.user_no;
    resolve ("insert into community values("+body.user_no+")");
  })
}

module.exports = community;
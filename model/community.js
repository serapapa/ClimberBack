let community = new Object();

community.parseGetListBody = (body) =>{
    return new Promise((resolve, reject)=>{
            console.log(body)

    
      "SELECT * FROM COMMUNITY WHERE USER_NO="+body.USER_NO;

    })
}

module.exports = community;
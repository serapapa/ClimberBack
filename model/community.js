let community = new Object();

community.parseGetListBody = (body) =>{
    return new Promise((resolve, reject)=>{
            console.log(body)

    
      "SELECT * FROM COMMUNITY WHERE uid="+body.uid;

    })

}

module.exports = community;
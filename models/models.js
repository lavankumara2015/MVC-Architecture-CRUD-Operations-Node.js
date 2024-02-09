const db = require("../database");



function getData(callback){

    const query="select * from customer"

    db.query(query,(err,data)=>{
        if(err){
            return callback(err);
        }else{
            return callback(null,data);
        }
    })
}


const deleteData=(id,callback)=>{
    const query="delete from customer where id=?";

    db.query(query,[id],(err,data)=>{
        if(err){
            return callback(err)
        }else{
            return callback(null,data)
        }
    })
}



const loginData = (id, name, callback) => {
    
    const query = "SELECT * FROM customer WHERE id = ? AND name = ?";

    db.query(query, [id, name], (err, data) => {
        console.log(data.length);

        if (err) {
            return callback("Invalid user ID and name");
        }
        else if(data.length === 0){
        
        
            return callback({message: "user not found"})
        } 
        else {
            return callback({message: "user logged in successfully", data});
        }
    });
};




function sendData(newData,callback){

    const id=newData.id;
    
    const checkQuery="SELECT * FROM customer WHERE id= ?";

    db.query(checkQuery,[id],(err,result)=>{
    
        if(err){
            return callback("error form send data function")
        }else if(result.length>0){
            return callback("id already exists in the database")
        }else{
            const query="insert into customer (id,name,payment) values (?,?,?)";

            db.query(query,[newData.id,newData.name,newData.payment],(err,data)=>{
                if(err){
                    return callback(err)
                }else{
                    return callback(null,data)
                }
            })
            
        }
    })  
}

module.exports={
    getData,sendData,deleteData,loginData
}
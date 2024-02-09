
const getting = require("../models/models");

function getData(req,res){
    getting.getData((err,data)=>{

        if(err){
            return res.send("getting data error (controller)")
        }else{
            res.json(data)
        }
    })
}

const deleteFunction=(req,res)=>{

    const id=req.params.id;

    getting.deleteData(id,(err,data)=>{
        if(err){
            return res.send(err)
        }else{
            return res.json({
                message:"user deleted successfully"
            })
        }
    })
}

const loginUser=(req,res)=>{
    const {id,name}=req.body;
    getting.loginData(id,name,(err,data)=>{

        if(err){
            return  res.send(err)
        }else{
            return res.json({
                message:data
            })
        }
    })
}

function addData(req,res){
    
    const newData = req.body;

    getting.sendData(newData,(err,data)=>{
       
        if(err){
            return res.send(err)
        }else{
            res.json({
                send:"data post Successfully"
            })
        }
    })
}

module.exports={
    getData , addData , deleteFunction,loginUser
}
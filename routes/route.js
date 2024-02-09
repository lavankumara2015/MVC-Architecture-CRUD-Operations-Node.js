const express= require("express");
const router =express.Router(); 
const getController=require("../controllers/controller");




router.get("/", getController.getData);
router.post("/", getController.addData);
router.delete("/:id",getController.deleteFunction)
router.get("/login",getController.loginUser)



module.exports=router;


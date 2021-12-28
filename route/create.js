const express1=require("express");
var route=express1.Router();
const taskmodule1=require("../modules/module");
route.get("/get",taskmodule1.taskmodule);
module.exports=route;
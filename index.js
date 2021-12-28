const express1=require("express");
const app=express1();
const crt=require("./route/create");


 app.use(express1.json());

app.use('/create', crt);

app.listen(3000);
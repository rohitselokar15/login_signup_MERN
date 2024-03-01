// npm run dev

require('dotenv').config();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/College").then(()=>{
    console.log("connection done");
}).catch((err)=>{
    console.log(err);
});

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const student1 = require("./controllers/studentController");
 const  student2 = require("./controllers/studentLogin");

const views_path = path.join(__dirname,"template/views");

app.set('view engine','ejs');    

app.set('views',views_path);
console.log(views_path);

// console.log(process.env.SECRET_KEY);

app.get("/header",function(req,res){
    res.render("header");
})

app.get("/",function(req,res){
    res.render("home");
})

app.get("/register",function(req,res){
    res.render("register");
})


app.post("/register",student1.insertStudent)


app.get("/login",function(req,res){
    res.render("login");
})

app.post("/login",student2.checkData);


app.listen(port,function(req,res){
    console.log("Server created");
})
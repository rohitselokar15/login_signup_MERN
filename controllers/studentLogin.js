const student2 = require("../model/studentModel");
const bcrypt = require("bcrypt")


const checkData = async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await student2.findOne({email:email});

    

        const isMatch = await bcrypt.compare(password,useremail.password);
      
        if(isMatch){
        res.render("home");
        }
        else{
           res.send("invalid login details");
        }
   }
   catch(err){
    
       res.status(400).send("invalid Email");
   }
}
 
module.exports = {checkData};
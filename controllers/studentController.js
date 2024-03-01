
const student = require("../model/studentModel");

const insertStudent = async(req,res)=>{
    try{
        const student1 = new student({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password
        });

        // const token = await student1.generateAutoToken();
        // console.log("The token part " + token);
         

        const result = await student1.save(); 
        res.render("login");
        
    }catch(error){
        res.send(error.message);
    }
}

module.exports = {insertStudent};
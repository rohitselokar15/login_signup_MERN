const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const student1 = require("../controllers/studentController") 


const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{ 
        type:String,
        required:true  
    }
    // tokens:[
    //     {
    //        token:{
    //         type:String,
    //         required:true
    //        }
    //     }
    // ]
})


// generating token
// studentSchema.methods.generateAutoToken = async function(){
//     try{
//         console.log(this._id);
//         const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token})
//         await this.save();
//         return token;
//         // console.log(token);

//     // const userVerify = await jwt.verify(token,"mynameisrohitinformationtechnology");
//     // console.log(userVerify);
//     }
//     catch(err){
//         // resizeBy.send(error);
//         console.log("The error part "+ err);
//     }
// }

// createToken();

// bcrypt the password using hash
studentSchema.pre("save",async function(next){
    if(this.isModified("password")){
        console.log("The Current password is " + this.password);
        this.password = await bcrypt.hash(this.password,10);
        console.log("The updated password is " + this.password);
    }
    next();
})

const student = new mongoose.model("student",studentSchema);

module.exports = student;
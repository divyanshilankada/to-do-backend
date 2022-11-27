const mongoose=require('mongoose');

const UserRegisterSchema = new mongoose.Schema({

    user_name : {
        type:String,
    },
    password : {
        type:String,
    },
   

}, { timestamps: true })


const UserRegisterModel = mongoose.model("userRegisterModel", UserRegisterSchema);
module.exports = UserRegisterModel;

const mongoose=require('mongoose');

const UserRegisterSchema = new mongoose.Schema({

    user_name : {
        type:String,
        reuqired : true
    },
    password : {
        type:String,
        reuqired : true
    },
   

}, { timestamps: true })


const UserRegisterModel = mongoose.model("userRegisterModel", UserRegisterSchema);
module.exports = UserRegisterModel;

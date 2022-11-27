const mongoose=require('mongoose');

const UserActivitySchema = new mongoose.Schema({

    activity : {
        type:String,
    },
    status : {
        type:String,
    },
    time:String,
    sort:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserRegisterModel",
        required:true
    }
   

}, { timestamps: true })


const UserActivityModel = mongoose.model("userActivityModel", UserActivitySchema);
module.exports = UserActivityModel;

import mongoose from "mongoose";

const usetScehma = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type :String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date
},{timestamp:true})


export const User = mongoose.model('User', usetScehma);
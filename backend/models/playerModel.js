import mongoose, { now } from "mongoose"

const Schema=mongoose.Schema

export const PlayerSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    firstName:{
        type:String,
        required:true
    },
    isCoach:{
        type:Boolean,
        default:false
    },
    team:{
        type:String
    },
    speed:{
        type:Number,
        enum:[1,2,3]
    },
    strength:{
        type:Number,
        enum:[1,2,3]
    },
    ability:{
        type:Number,
        enum:[1,2,3]
    },
    technique:{
        type:Number,
        enum:[1,2,3]
    },
    tactical:{
        type:Number,
        enum:[1,2,3]
    },
    date:{
        type:Date,
        default:Date.now
    }
})
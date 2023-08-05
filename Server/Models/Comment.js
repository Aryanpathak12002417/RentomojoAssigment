const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    Like:{
        type:Number,
    },
    dislike:{
        type:Number,
    },
    body:{
        type:String,
        required:true
    },
    replay:{
        type:Array,
        items:{
            Like:{
                type:Number,
            },
            dislike:{
                type:Number
            },
            user_id:{
                type:mongoose.Schema.Types.ObjectId,
                required:true
            }
        }
    }
})

module.exports=mongoose.model('User',userSchema)
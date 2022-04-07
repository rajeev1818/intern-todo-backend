const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        required:true,
        default:'LOW'
    },
    status:{
        type:String,
        required:true,
        default:'TO DO'
    },
    due_date:{
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})


const Todo=mongoose.model('Todo',todoSchema)

module.exports=Todo
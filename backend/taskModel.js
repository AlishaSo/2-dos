//Title (Optional?) Title is required for bunch of tasks related to one event. Default title(to-do)?
//Task/Description - Required
//Date-When it was created(Timestamp-visible)
//Date-Due date(entering Date.Give Options like Today, Tomorrow, 1 Week)
//Priority - Color Coded. Red-Urgent, Amber-Medium , Green-Low
//Status - Done/Not
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const Task = new Schema(
{
    title:{
        type:String,
        required:false,
   
    },
    description:{
        type:String,
        required:true,
   
    },
    dueDate:{
        type:String,
        required:false,
    },
    priority:{
        type:String,
        required:false,
    },
    status:{
        type:String,
        required:false,
    }

},
    {timestamps:true},

); 
module.exports = mongoose.model("Task",Task)

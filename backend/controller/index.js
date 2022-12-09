const Task = require("../taskModel.js");


//CREATE
const createTask = async (req, res) =>{
    
    if(!req.body.description) {
        res.status(400).send('Description not received. Please enter a description!');
      }
    const newTask = new Task({
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate,
        priority:req.body.priority,
        status:req.body.status,
    });

    try{
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    
    }catch(err){
        res.status(500).json(err)
    }
    };

//GET
const getAllTasks = async (req, res) =>{
try{
    
    const Tasks = await Task.find();
    if(Tasks){
    return res.status(200).json(Tasks)
    }
    return res.status(404).json({Message:"Invalid Request.No tasks found!"})
    
}
catch(err){
    res.status(500).json(err);
}
}

module.exports = {
   createTask,
   getAllTasks
    
}

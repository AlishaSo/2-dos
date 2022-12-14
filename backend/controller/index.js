const Task = require("../taskModel.js");


//CREATE
const createTask = async (req, res) =>{
    
    if(!req.body.description) {
        return res.status(400).send('Description not received. Please enter a description!');
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
        return res.status(200).json(savedTask);
    
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

//UPDATE

const updateTask = async(req,res)=>{
    
    try{
    
        if(!req.body.description) {
        return res.status(400).send('Description not received. Please enter a description!');
      }
      //get the id of the task from URL
      const { id } = req.params;

      const taskToBeUpdated = await Task.findById(id); 
      if(taskToBeUpdated){
        Task.findByIdAndUpdate(id, req.body, { new: true }, (e, taskToBeUpdated) => {
            if(e != null) {
              console.log(e, 'error');
              res.status(404).send(message);
            }
            else {
                console.log(taskToBeUpdated);
                res.json(taskToBeUpdated);
              }
      });


    }}
   
    catch(err){
        res.status(500).json(err);

    }
}


module.exports = {
   createTask,
   getAllTasks,
   updateTask,

    
}

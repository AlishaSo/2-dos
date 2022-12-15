const {Router} = require("express")
const taskControl = require("../controller/index.js")

const router = Router();


//GET
router.get('/', (req, res) => res.send('This is the root!'));
router.get('/tasks',taskControl.getAllTasks);
router.get('/tasks/:id',taskControl.getOneTask);

//POST
router.post('/task', taskControl.createTask);

//UPDATE
router.put('/tasks/:id',taskControl.updateTask);

//DELETE
router.delete('/tasks/:id',taskControl.deleteTask);

module.exports = router;

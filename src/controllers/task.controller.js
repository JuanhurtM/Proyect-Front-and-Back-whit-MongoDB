import Task from "../models/Task"


//Controlador que renderiza las tareas en la tabla
export const renderTasks = async (req, res) =>{

    const task = await Task.find().lean()
    res.render("index", {task: task}) 
    
};

//Controlador que crea las tareas
export const createTask = async (req,res) =>{
    
    const task = Task(req.body)
    await task.save()
    res.redirect("/") // --> se actualiza de una porque al terminar la sentencia en mongo refreca la pagina
};

//Controlador que rederiza la edicion de tareas
export const renderTaskEdit = async (req, res) =>{
    
    const task = await Task.findById(req.params.id).lean()
     res.render("edit", {task: task})
 
 };

 //Controlador que actualiza las tareas
 export const taskEdit = async (req, res) => {
    
    await Task.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/") // --> Mismo caso de consultar se actualiza de una porque estoy refrescando la pagina
 
 };

 //Controlador que elimina las tareas
 export const taskDelete = async (req,res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.redirect("/") // --> Exactamente igual que agragar y actualizar al hacer al sentencia refresco la pagina principal o raiz
};

//Marcar las tareas como hechas
export const taskDone = async (req,res) => {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    res.redirect("/") // --> se actualiza la caracteristica al realizar la sentencia y refrescar la pagina
};
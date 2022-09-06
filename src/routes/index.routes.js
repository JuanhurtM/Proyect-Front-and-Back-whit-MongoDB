// enrutador, hace como la funcion de un controlador pero no es el controlador

import {Router} from "express";
import Task from "../models/Task";
import {
        renderTasks,
        createTask,
        renderTaskEdit,
        taskEdit,
        taskDelete,
        taskDone
    }from "../controllers/task.controller"

const router = Router();

router.get("/about", (req,res) =>{
    res.render("about")
})

//Metodo Consultar
router.get("/", renderTasks);

//Metodo Agregar
router.post("/tasks/add", createTask);

// Ir a la pagina Actualizar
router.get("/edit/:id", renderTaskEdit);

//Metodo Actualizar
router.post("/edit/:id",taskEdit);

//Metodo Eliminar
router.get("/delete/:id",taskDelete);

// Marcar tarea como hecha
router.get("/toggleDone/:id",taskDone)

export default router;
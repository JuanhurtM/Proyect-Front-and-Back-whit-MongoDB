//Imports
import "./config";
import app from "./app";
import "./database";

//Escucha del servidor
app.listen(3000);
console.log("server montado en puerto: ", 3000);

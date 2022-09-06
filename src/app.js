// Aqui se configura todo el servidor

//Imports
import express from "express";
import indexRputes from "./routes/index.routes";
import {engine} from 'express-handlebars'; 
import path from "path";
import morgan from "morgan";

const app = express();

//Configuracion del servidor
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", engine({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views"),"partials"),
    layoutsDir: path.join(app.get("views"),"layouts"),
    extname: ".hbs",
}));

app.set("view engine", ".hbs");

//Middlewars
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(indexRputes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));


export default app;
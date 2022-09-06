import mongoose from "mongoose";
import {MONGODB_URI} from "./config";

// Conexcion a la base de datos
(async() => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log("DB contectado a", db.connection.name);  
    } catch (error) {
        console.log(error);
    }
})();




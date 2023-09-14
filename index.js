import express  from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import abogadoRoutes from "./routes/abogadoRoutes.js";
const app = express(); //llamar a express
dotenv.config(); //leler este archivo de env
conectarDB(); //llamar la coneccion de db

app.use('/api/abogado', abogadoRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Funcionando desde el puerto ${PORT}`);
});

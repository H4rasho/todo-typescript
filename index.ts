import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import dbConnection from "./database/config";
import { router } from "./routes/todo";

export const app: Application = express();

// Cors
app.use(cors());

// Base de datos
dbConnection();

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/todo", router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor encendido en el puerto ${process.env.PORT}`);
});

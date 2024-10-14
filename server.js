import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js";

const server = express();

const PORT = process.env.PORT;

const ready = () => console.log("El servidor esta en el puerto:" + PORT);

server.use(express.json()); // permite trabajar con formato json de entrada y salida
server.use(express.urlencoded({ extended: true })); // permite querys y parametros
server.use(cors()); // permite crear claves de acceso para usuarios
server.use(morgan("dev")); // permite ver y controlar la traza de las peticiones hechas al servidor

server.use("/api", indexRouter); // router principal

server.listen(PORT, ready);

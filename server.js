import express from "express";
import "dotenv/config.js";
import "./config/database.js";

const server = express();

const PORT = process.env.PORT;

const ready = () => console.log("El servidor esta en el puerto:" + PORT);

server.get("/", (request, response) => {
  response.send("Hola mundo en express");
});
server.get("/saludo", (request, response) => {
  response.send("bienvenido a express");
});

server.listen(PORT, ready);

console.log(process.env.PORT);

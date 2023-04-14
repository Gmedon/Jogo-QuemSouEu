import express from "express"
import path from "path"
import dotenv from "dotenv"
import mustache from "mustache-express"
import routesmain from "./routes/rotas"

dotenv.config()

const server = express()

server.use(express.static(path.join(__dirname, "../public")))

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.urlencoded({ extended: true }))

server.use(routesmain)

server.listen(process.env.PORT)
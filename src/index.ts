import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import UsuarioRota from "../src/Routes/UsuarioRouter"
import UsuarioController from '../src/controllers/UsuarioController';
import PosterRouter from "../src/Routes/PosterRouter"
const port = process.env.PORT
dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/usuario", UsuarioRota)
app.use("/post", PosterRouter)
app.listen(port, () => {
    console.log("servidor rodando " + port)
})
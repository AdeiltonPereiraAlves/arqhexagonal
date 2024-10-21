import express from 'express'
import dotenv from 'dotenv'

import UsuarioRota from "../src/Routes/UsuarioRouter"
import UsuarioController from '../src/controllers/UsuarioController';
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT
app.use("/usuario",UsuarioRota)
app.listen(port, () => {
    console.log("servidor rodando "+ port)
})
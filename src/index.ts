import express from 'express'
import dotenv from 'dotenv'

import UsuarioRota from '../src/controllers/UsuarioController'
import UsuarioController from '../src/controllers/UsuarioController';
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT
app.get("/usuario",)
app.listen(port, () => {
    console.log("servidor rodando "+ port)
})
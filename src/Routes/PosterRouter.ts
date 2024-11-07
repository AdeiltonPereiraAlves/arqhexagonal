import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
import { VerificarToken } from "../adptadores/middleware/Token";

const router = Router()

router.post("/",VerificarToken, InserirPostController.inserir)


export default router
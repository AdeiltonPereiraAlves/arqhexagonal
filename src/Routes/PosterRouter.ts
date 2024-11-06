import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
import BuscarPostsController from "../controllers/BuscarPostsController";
import { VerificarToken } from "../adptadores/middleware/Token";

const router = Router()

router.post("/", VerificarToken, InserirPostController.inserir)
router.get("/", BuscarPostsController.buscarPosts)


export default router
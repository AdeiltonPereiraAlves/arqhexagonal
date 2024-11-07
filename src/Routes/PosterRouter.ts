import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
import BuscarPostsController from "../controllers/BuscarPostsController";
import BuscarPostController from "../controllers/BuscarPostController"
import DeletarPostController from "../controllers/DeletarPostController";
import { VerificarToken } from "../adptadores/middleware/Token";

const router = Router()

router.post("/", VerificarToken, InserirPostController.inserir)
router.get("/", BuscarPostsController.buscarPosts)
router.get("/detalhes/:id",BuscarPostController.buscarPorId)
router.delete("/excluir/:id",DeletarPostController.deletar )

export default router
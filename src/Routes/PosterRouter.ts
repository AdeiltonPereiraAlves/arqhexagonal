import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
import BuscarPostsController from "../controllers/BuscarPostsController";
import BuscarPostController from "../controllers/BuscarPostController"
import DeletarPostController from "../controllers/DeletarPostController";
import EditarPostController from "../controllers/EditarPostController";
import { VerificarToken } from "../adptadores/middleware/VerificarToken";

const router = Router()

router.post("/", VerificarToken, InserirPostController.inserir)
router.get("/", BuscarPostsController.buscarPosts)
router.get("/detalhes/:id",BuscarPostController.buscarPorId)
router.delete("/excluir/:id",DeletarPostController.deletar )
router.put("/editar/:id",VerificarToken,EditarPostController.editar )
export default router
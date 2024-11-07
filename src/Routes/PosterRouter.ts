import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
<<<<<<< HEAD
=======
import BuscarPostsController from "../controllers/BuscarPostsController";
import BuscarPostController from "../controllers/BuscarPostController"
import DeletarPostController from "../controllers/DeletarPostController";
>>>>>>> 9bb058b59caa413c1c2f6200faee9edf8357cf60
import { VerificarToken } from "../adptadores/middleware/Token";

const router = Router()

<<<<<<< HEAD
router.post("/",VerificarToken, InserirPostController.inserir)

=======
router.post("/", VerificarToken, InserirPostController.inserir)
router.get("/", BuscarPostsController.buscarPosts)
router.get("/detalhes/:id",BuscarPostController.buscarPorId)
router.delete("/excluir/:id",DeletarPostController.deletar )
>>>>>>> 9bb058b59caa413c1c2f6200faee9edf8357cf60

export default router
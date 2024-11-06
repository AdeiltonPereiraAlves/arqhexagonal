import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";
import BuscarPostsController from "../controllers/BuscarPostsController";

const router = Router()

router.post("/", InserirPostController.inserir)
router.get("/", BuscarPostsController.buscarPosts)


export default router
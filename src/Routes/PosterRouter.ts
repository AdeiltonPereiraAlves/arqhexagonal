import { Router } from "express";
import InserirPostController from "../controllers/InserirPostController";

const router = Router()

router.post("/", InserirPostController.inserir)


export default router
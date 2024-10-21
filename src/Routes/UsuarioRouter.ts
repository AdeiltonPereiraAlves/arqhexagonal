import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const router = Router();

router.post("/", UsuarioController.registrar)
router.get("/", UsuarioController.obeterUsuarios)

export default router;
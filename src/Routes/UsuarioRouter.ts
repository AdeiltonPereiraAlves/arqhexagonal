import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import LoginUsuarioController from "../controllers/LoginUsuarioController";
import { VerificarToken } from "../adptadores/middleware/Token";
import RotaSecreta from "../controllers/RotaSecreta";
const router = Router();

router.post("/", UsuarioController.registrar);
router.get("/", UsuarioController.obeterUsuarios);
router.post("/login", LoginUsuarioController.Logar);
router.get("/admin", VerificarToken, RotaSecreta.acessando);

export default router;

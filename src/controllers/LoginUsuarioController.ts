import { Request, Response } from "express";
import SenhaReal from "../adptadores/auth/BcCript";
import PrismaDb from "../adptadores/db/PrismaDb";
import LoginUsuario from "../core/usuario/LoginUsuario";
import { Usuario } from "../core/usuario/Usuario";
import JwtToken from "../adptadores/auth/JwtToken";

export default class LoginUsuarioController {
  static async Logar(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body as any;
      const user = { email, senha };
      const logarUsuario = new LoginUsuario(
        new PrismaDb(),
        new SenhaReal(),
        new JwtToken()
      );
      const usuario = await logarUsuario.executar(user);
      res
        .json({
          usuario,
        })
        .status(201);
    } catch (e) {
      res.status(404).send();
    }
  }
}

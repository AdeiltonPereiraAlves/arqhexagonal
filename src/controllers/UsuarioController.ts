import RegistrarUsuario from "../core/usuario/RegistrarUsuario";
import { Express } from "express";
import { Router } from "express";
import PrismaDb from "../adptadores/db/PrismaDb";
import SenhaReal from "../adptadores/auth/BcCript";
export default class UsuarioController {
  
  static async registrar(req: any, res: any): Promise<any> {
    try {
      const { nome, email, senha } = req.body as any;
      const user ={nome, email, senha}
      const registrar = new RegistrarUsuario(new PrismaDb(), new SenhaReal());
      await registrar.executar(user);

      res.status(201).send();
    } catch (err: any) {
      res.status(400).send(err.message);
    }
  }
  static async obeterUsuarios(req: any, res: any): Promise<any> {
    try {
      const obeterUsuarios = new RegistrarUsuario(
        new PrismaDb(),
        new SenhaReal()
      );
      const usuarios = await obeterUsuarios.obeterUsuarios();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
    }
  }
}

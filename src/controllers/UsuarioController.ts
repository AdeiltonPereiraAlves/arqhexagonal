import RegistrarUsuario from "../core/usuario/RegistrarUsuario";
import { Express } from "express";
import { Router } from "express";
import PrismaDb from "../adptadores/db/PrismaDb";
import SenhaReal from "../adptadores/auth/SenhaReal";
export default class UsuarioController{
   //  constructor( private servidor: Express, private router: Router, private RegistrarUsuario: RegistrarUsuario){
        
   //  }

    static async registrar(req:any, res: any): Promise<any> {
       try {
        const {nome, email, senha} = req.body as any
        const registrar =  new RegistrarUsuario(new PrismaDb, new SenhaReal)
       const usuario = await registrar.executar(nome, email, senha)

       res.json({usuario})

       } catch (error) {
          console.error(error)
       }
    }
}
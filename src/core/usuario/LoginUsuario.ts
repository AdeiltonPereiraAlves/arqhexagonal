
import SenhaReal from "../../adptadores/auth/BcCript";
import JwtToken from "../../adptadores/auth/JwtToken";
import PrismaDb from "../../adptadores/db/PrismaDb";
import CasoDeUso from "../shared/CasoDeUso";
import { Usuario } from "./Usuario";
const segredo = process.env.SECRET

export type Dto = {email: string, senha: string}
export type Saida = {usuario: Usuario,token: string}
export default class LoginUsuario implements CasoDeUso<Dto, Saida> {
  constructor(private banco: PrismaDb, private senha: SenhaReal,private token: JwtToken) {}
  async executar(dto: Dto):Promise<Saida> {
    try {
      const usuario = await this.banco.obterUsuario(dto.email);
      const usuarioId = usuario?.id as any
      if(!usuario) throw new Error("Usuario não existe")
      const senhaCript = usuario?.senha as any;
      const mesmaSenha = this.senha.comparar(dto.senha, senhaCript);

      if (!mesmaSenha) {
        throw new Error("Senhas diferentes");
      }
      const tokenGerado = this.token.gerarToken(usuarioId, dto.email, dto.senha, segredo)
      return {usuario:{ ...usuario, senha: undefined},
       token:{tokenGerado} as any
    }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

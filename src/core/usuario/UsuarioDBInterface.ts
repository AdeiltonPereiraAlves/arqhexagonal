import { Usuario } from "../usuario/Usuario";

export default interface UsuarioDbInterface{
    inserir(usuario: Usuario):Promise<void>
    obterUsuario(email: any): any
    obterUsuarios(): any
}
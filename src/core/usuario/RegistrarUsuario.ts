
import Id from "../shared/Id"
import BancoInterface from "../portas/BancoInterface"
import SenhaInterface from "./SenhaInterface"
import { Usuario } from "./Usuario"
import UsuarioDbInterface from "./UsuarioDBInterface"




// aplicaçao
export default class RegistrarUsuario {


  

    constructor(private banco: UsuarioDbInterface, private senha: SenhaInterface) { }
    
    async executar(nome: string, email: string, senha: string) {
        const senhaCripto = await this.senha.criptarSenha(senha)
        const usuario: any= {
            id: Id.criar(),
            nome,
            email,
            senha: senhaCripto
        }
        this.banco.inserir(usuario)

        return usuario





    }
    async login(email:string, senha: string){
         const usuario = await this.banco.obterUsuario(email)

          const senhaCripto = usuario.senha
         return this.senha.comparar(senha, senhaCripto)


    }
    async obeterUsuarios(){
        return await this.banco.obterUsuarios()
    }

}
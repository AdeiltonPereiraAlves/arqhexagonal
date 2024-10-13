import BancoInterface from "../portas/BancoInterface"
import SenhaInterface from "../portas/SenhaInterface"




// aplicaçao
export default class RegistrarUsuario {


  

    constructor(private banco: BancoInterface, private senha: SenhaInterface) { }
    
    executar(nome: string, email: string, senha: string) {
        const senhaCripto = this.senha.criptarSenha(senha)
        const usuario = {
            id: Math.random(),
            nome,
            email,
            senha: senhaCripto
        }
        this.banco.inserir(usuario)

        return usuario





    }

}
import BancoInterface from "../../core/portas/BancoInterface"

// adaptador
export default class Banco implements BancoInterface{
    obterUsuarios() {
        throw new Error("Method not implemented.")
    }
    obterUsuario(email: any) {
        throw new Error("Method not implemented.")
    }
    static itens: any[] = []

    inserir(item: any) {
        
       Banco.itens.push(item)

        return item
    }
}
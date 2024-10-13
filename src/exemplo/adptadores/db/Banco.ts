import BancoInterface from "../../core/portas/BancoInterface"

// adaptador
export default class Banco implements BancoInterface{
    static itens: any[] = []

    inserir(item: any) {
        
       Banco.itens.push(item)

        return item
    }
}
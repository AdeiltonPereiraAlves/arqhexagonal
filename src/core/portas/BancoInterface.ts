// porta
export default interface BancoInterface{
    inserir(item: any):any
    obterUsuario(email: any): any
    obterUsuarios(): any
}
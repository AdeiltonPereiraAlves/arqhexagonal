export default interface SenhaInterface {
    criptarSenha(senha: any): any
    comparar(senha: string, senhaCripto: string): boolean
}
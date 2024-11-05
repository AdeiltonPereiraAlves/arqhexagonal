export default interface JwtUsuario{
    gerarToken(email: string, senha: string, segredo:any): any
    verificaToken(token: any, segredo: any): any
}
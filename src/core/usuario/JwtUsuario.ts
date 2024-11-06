export default interface JwtUsuario{
    gerarToken(id: string,email: string, senha: string, segredo:any): any
    verificaToken(token: any, segredo: any): any
}
export default interface JwtUsuario{
    gerarToken(usuarioId: string, email: string, senha: string, segredo:any): any
    verificaToken(token: any, segredo: any): any
}
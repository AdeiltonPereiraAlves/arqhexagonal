export default interface JwtUsuario{
<<<<<<< HEAD
    gerarToken(usuarioId: string, email: string, senha: string, segredo:any): any
=======
    gerarToken(id: string,email: string, senha: string, segredo:any): any
>>>>>>> 9bb058b59caa413c1c2f6200faee9edf8357cf60
    verificaToken(token: any, segredo: any): any
}
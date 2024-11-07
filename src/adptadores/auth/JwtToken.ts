import JwtUsuario from "../../core/usuario/JwtUsuario";
import  Jwt  from "jsonwebtoken";

export default class JwtToken implements JwtUsuario{
<<<<<<< HEAD
    gerarToken(usuarioId:string, email: string, senha: string, segredo: any) {
=======
    gerarToken(id: string, email: string, senha: string, segredo: any) {
>>>>>>> 9bb058b59caa413c1c2f6200faee9edf8357cf60
        
        const token = Jwt.sign({id,email, senha}, segredo, {expiresIn: '1h'})
        return token;
    }
    
    verificaToken(token: any, segredo: any) {
        try {
            if(!token) throw new Error(
                "Token invalido"
            )
            
            const payload = Jwt.verify(token, segredo)
            return payload;
            
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }
    
}
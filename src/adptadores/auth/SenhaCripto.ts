import SenhaInterface from "../../core/usuario/SenhaInterface";
import bcrypt from 'bcrypt'
export default class SenhaCripto implements SenhaInterface{
    
    criptarSenha(senha: any) {
        
        return senha.split('').reverse().join('')
    }
    comparar(senha: string, senhaCripto: string): boolean {
        return true
    }
    
}
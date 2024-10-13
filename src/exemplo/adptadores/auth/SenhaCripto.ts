import SenhaInterface from "../../core/portas/SenhaInterface";

export default class SenhaCripto implements SenhaInterface{
   
    criptarSenha(senha: any) {
       
        return senha.split('').reverse().join('')
    }
    
}
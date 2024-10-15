import SenhaInterface from "../../core/portas/SenhaInterface";
import bcrypt from 'bcrypt'

//adapter
export default class SenhaReal implements SenhaInterface {
    criptarSenha(senha: any) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(senha, salt);
    }
    comparar(senha: string, senhaCripto: string): boolean {
        return  bcrypt.compareSync(senha, senhaCripto);

    }

}
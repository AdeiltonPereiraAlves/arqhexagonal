import { PrismaClient } from "@prisma/client";
import BancoInterface from "../../core/portas/BancoInterface";
import UsuarioDbInterface from "../../core/usuario/UsuarioDBInterface";
import { Usuario } from "../../core/usuario/Usuario";
export default class PrismaDb implements UsuarioDbInterface {
    private db: PrismaClient
    constructor() {
        this.db = new PrismaClient()
    }
    async inserir(usuario: Usuario): Promise<void> {
        await this.db.usuario.create({ data: usuario as any })
    }
    async obterUsuario(email: string): Promise<Usuario | null> {
        try {
            const usuario = await this.db.usuario.findUnique({
                where: { email: email }
            });
            console.log(usuario);
            return usuario; // Retorna null se o usuário não for encontrado
        } catch (error) {
            console.log(error);
            return null; // Retorna null em caso de erro
        }
    }
    async obterUsuarios() {
        return await this.db.usuario.findMany(
            {select: {
                id: true,
                nome: true,
                email: true,
                senha: undefined

            }})
    }

}
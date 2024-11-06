import { title } from "process";
import PostDb from "../../adptadores/db/PostDb";
import CasoDeUso from "../shared/CasoDeUso";
import Id from "../shared/Id";
import Post from "./Post";

export type Dto = { titulo: string, texto: string, curtida: number , usuarioId: string}
export type Saida = { post:Dto }
export default class RegistrarPost implements CasoDeUso<Dto, Saida> {

    constructor(private bancoPost: PostDb) {

    }
    executar(dto: Dto): Promise<Saida> {
        const post: Post = {
            id: Id.criar(),
            titulo: dto.titulo,
            texto: dto.texto,
            curtida: dto.curtida,
            usuarioId: dto.usuarioId
        }
         const postCriado = this.bancoPost.inserir(post)
         return postCriado
       
    }

}
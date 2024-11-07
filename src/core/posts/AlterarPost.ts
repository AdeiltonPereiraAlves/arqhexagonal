
import { Post } from "@prisma/client";
import PostDb from "../../adptadores/db/PostDb";
import CasoDeUso from "../shared/CasoDeUso";


export type Dto = {id:string,titulo: string, texto: string}
export type Saida ={post:Dto}
export default class AlterarPost implements CasoDeUso<Dto, Saida>{
    constructor(private db: PostDb){}
    executar(dto: Dto){
        const novoPost: any = {
            id: dto.id,
            titulo:dto.titulo,
            texto: dto.texto
        }
        return this.db.editarPost(novoPost)
    }
}
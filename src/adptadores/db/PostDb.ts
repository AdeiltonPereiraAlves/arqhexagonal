import { PrismaClient } from "@prisma/client";
import Post from "../../core/posts/Post";
import PostDbInterface from "../../core/posts/PostDbIterface";

export default class PostDb implements PostDbInterface{
    private db: PrismaClient
   
    constructor( ){
        this.db = new PrismaClient()
    }
    async inserir(post:Post): Promise<any> {
        const{titulo, texto, curtida, usuarioId} = post 
        try {
             await this.db.post.create({data:{titulo, texto, curtida, usuarioId} as any})
        } catch (error: any) {
             console.log(error)
            throw new Error("Erro ao criar post.");
        }
    }
    async buscarPosts(): Promise<any> {
         try {
            return this.db.post.findMany()
         } catch (error) {
            
             throw new Error("Erro ao buscar post.");
         }
    }
    
}
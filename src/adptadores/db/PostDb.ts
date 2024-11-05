import { PrismaClient } from "@prisma/client";
import Post from "../../core/posts/Post";
import PostDbInterface from "../../core/posts/PostDbIterface";

export default class PostDb implements PostDbInterface{
    private db: PrismaClient
   
    constructor( ){
        this.db = new PrismaClient()
    }
    async inserir(post:Post): Promise<any> {
        const{titulo, texto, curtida} = post 
        try {
             await this.db.post.create({data:{titulo, texto, curtida} as any})
        } catch (error: any) {
             console.log(error)
            throw new Error("Erro ao criar post.");
        }
    }
    buscarPosts(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}
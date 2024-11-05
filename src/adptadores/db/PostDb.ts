import { PrismaClient } from "@prisma/client";
import Post from "../../core/posts/Post";
import PostDbInterface from "../../core/posts/PostDbIterface";

export default class PostDb implements PostDbInterface{

   
    constructor( private db: PrismaClient){
        this.db = new PrismaClient()
    }
    async inserir(post:Post): Promise<any> {
        const{titulo, texto, curtida} = post as any
        try {
             await this.db.post.create({data:{titulo, texto, curtida}})
        } catch (error) {
            
            throw new Error("Erro ao criar post.");
        }
    }
    buscarPosts(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}
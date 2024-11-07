import { Request, Response } from "express";
import DeletarPost from "../core/posts/DeletarPost";
import PostDb from "../adptadores/db/PostDb";

export default class DeletarPostController{
    static async deletar(req: Request, res: Response){
         try {
            const id = req.params.id
            const deletarPost = new DeletarPost(new PostDb)
            const deletado =  deletarPost.deletar(id)
            if(deletado){
                res.status(200).send()
            }
            
         } catch (error) {
            throw new Error("Erro ao deletar post ")
         }
    }
}
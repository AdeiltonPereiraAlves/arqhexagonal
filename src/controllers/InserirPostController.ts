import { Request, Response } from "express";
import RegistrarPost from "../core/posts/RegistrarPost";
import PostDb from "../adptadores/db/PostDb";

export default class InserirPostController {
    static async inserir(req: Request, res: Response): Promise<any | null> {
        try {
            const {titulo, texto, curtida} = req.body 
            const post = { titulo, texto, curtida}
            const registrarPost = new RegistrarPost(new PostDb())
            const result = await registrarPost.executar(post)
            res.json({result})
        } catch (error) {
            console.error(error)
        }
    }
}
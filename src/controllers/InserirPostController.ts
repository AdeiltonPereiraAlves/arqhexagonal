import { Request, Response } from "express";
import RegistrarPost from "../core/posts/RegistrarPost";
import PostDb from "../adptadores/db/PostDb";
import Post from "../core/posts/Post";

export default class InserirPostController {
    static async inserir(req: Request, res: Response): Promise<any> {
        try {
            const {titulo, texto, curtida, usuarioId} = req.body 
            const post = { titulo, texto, curtida, usuarioId}
            const registrarPost = new RegistrarPost(new PostDb())
            const result = await registrarPost.executar(post)
            res.status(201).json(result)
        } catch (error) {
            console.error(error)
            if (!res.headersSent) {
                res.sendStatus(500);
            }
            
        }
    }
}
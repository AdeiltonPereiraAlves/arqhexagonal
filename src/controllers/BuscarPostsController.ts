import { Request, Response } from "express";
import ObterPosts from "../core/posts/ObterPosts";
import PostDb from "../adptadores/db/PostDb";

export default class BuscarPostsController{
    static async buscarPosts(req: Request, res: Response){
        try {
            const posts = new ObterPosts(new PostDb)
            const arrayPosts = await posts.obter()
            res.json(arrayPosts)
        } catch (error) {
            throw new Error("Erro ao buscar posts no controller")
        }
    }
}
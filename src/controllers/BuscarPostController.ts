import { Request, Response } from "express";
import ObterPostID from "../core/posts/ObterPostPorID";
import PostDb from "../adptadores/db/PostDb";

export default class BuscarPostController {
  static async buscarPorId(req: Request, res: Response):Promise<Response | any>{
    try {
      const id = req.params.id;
      const buscarPost = new ObterPostID(new PostDb());
      const post = await buscarPost.obterPorId(id);
      if (!post) {
        return res.status(404).send("Post não encontrado.");
      }
      console.log(post);
      res.json(post);
    } catch (error) {
      console.error("Erro ao buscar post no controller:", error);
      return res.status(500).send("Erro ao buscar post.");
    }
  }
}

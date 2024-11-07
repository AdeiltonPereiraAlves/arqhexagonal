import { PrismaClient } from "@prisma/client";
import Post from "../../core/posts/Post";
import PostDbInterface from "../../core/posts/PostDbIterface";

export default class PostDb implements PostDbInterface {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }
  async inserir(post: Post): Promise<any> {
    const { titulo, texto, curtida, usuarioId } = post;
    try {
      await this.db.post.create({
        data: { titulo, texto, curtida, usuarioId } as any,
      });
    } catch (error: any) {
      console.log(error);
      throw new Error("Erro ao criar post.");
    }
  }
  async buscarPosts(): Promise<any> {
    try {
      return this.db.post.findMany();
    } catch (error) {
      throw new Error("Erro ao buscar post.");
    }
  }
  async buscarPorId(id: string): Promise<Post | null> {
    try {
      const post = await this.db.post.findUnique({ where: { id: id } });
      return post;
    } catch (error) {
      throw new Error("Erro ao buscar post por id.");
    }
  }
  async deletarPost(id: string): Promise<Post | null> {
    try {
      return await this.db.post.delete({ where: { id: id } });
    } catch (error) {
      throw new Error("Erro ao deletar post por id.");
    }
  }
  async editarPost(post:Post): Promise<any>{
    try {
      return  await this.db.post.update({where:{id: post.id}, data: { titulo: post.titulo, texto: post.texto}})
    } catch (error) {
      throw new Error("Erro ao editar post por id.");
    }
  }
}

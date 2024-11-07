import Post from "./Post";

export default interface PostDbInterface {
  inserir(post: Post): Promise<any>;
  buscarPosts(): Promise<any>;
  buscarPorId(id: string): Promise<Post | null>;
  deletarPost(id:string):Promise<Post | null>
  editarPost(post:Post): Promise<any>;
}

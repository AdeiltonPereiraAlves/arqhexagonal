import Post from "./Post"

export default interface PostDbInterface{
  inserir (post: Post): Promise<any>
  buscarPosts(): Promise<any>
}
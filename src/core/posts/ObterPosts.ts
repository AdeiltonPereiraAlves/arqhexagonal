import PostDb from "../../adptadores/db/PostDb";

export default class ObterPosts {
  constructor(private db: PostDb) {}

  obter() {
    const posts = this.db.buscarPosts();
    return posts;
  }
}

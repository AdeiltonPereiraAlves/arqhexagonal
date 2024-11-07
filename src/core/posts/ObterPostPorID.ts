import PostDb from "../../adptadores/db/PostDb";
import CasoDeUso from "../shared/CasoDeUso";

export default class ObterPostID {
   constructor(private db: PostDb){}
   obterPorId(id: string){
       const post = this.db.buscarPorId(id)
       return post;
   }
}
import PostDb from "../../adptadores/db/PostDb";

export default class DeletarPost{
    constructor(private db: PostDb){}
    deletar(id:string):boolean{
        this.db.deletarPost(id)
        return true
    }
}
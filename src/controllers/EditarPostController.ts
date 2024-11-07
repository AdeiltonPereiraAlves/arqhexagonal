import PostDb from "../adptadores/db/PostDb";
import AlterarPost from "../core/posts/AlterarPost";

export default class EditarPostController{
    static async editar(req:any, res: any): Promise<any>{
        try {
            const usuarioId = req.authUser?.id;
            const id = req.params.id// id estraido do payload do token
            if (!req.authUser || !req.authUser.id) {
                return res.status(401).json({ mensagem: "Usuário não autenticado" });
            }
            const { titulo, texto } = req.body
            const post = {id,titulo, texto, usuarioId}
            const editarPost = new AlterarPost(new PostDb())
            const result = await editarPost.executar(post)
            res.json(result)

        } catch (error) {
            console.error(error)
            if (!res.headersSent) {
                res.sendStatus(500)// res status
            }
        }
    }
}
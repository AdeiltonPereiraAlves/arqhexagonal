export default interface Post{
    id: string
    titulo: string
    texto: string
    curtida?: number |null
    usuarioId: string
    
}
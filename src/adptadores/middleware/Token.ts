import JwtToken from "../auth/JwtToken";
const segredo = process.env.SECRET;
 async function VerificarToken(req: any, res: any, next: any) {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    const tokenValido = new JwtToken();
    if (!token) {
      return res
        .status(401)
        .json({ mensagem: "Acesso negado: Token não fornecido" });
    }
    try {
      const payload = tokenValido.verificaToken(token, segredo);
      req.usuario = payload;
      next();
    } catch (error) {
      return res
        .status(403)
        .json({ mensagem: "Acesso negado: Token inválido ou expirado" });
    }
  }

  export {VerificarToken}
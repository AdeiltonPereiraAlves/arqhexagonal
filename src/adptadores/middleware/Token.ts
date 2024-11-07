import { Request, Response, NextFunction } from "express";
import JwtToken from "../auth/JwtToken";
declare global {
  namespace Express {
    interface Request {
      authUser?: any; // Adiciona 'authUser' como propriedade opcional
    }
  }
}
const segredo = process.env.SECRET;

if (!segredo) {
  throw new Error("SECRET não está definido no arquivo de configuração.");
}

async function VerificarToken(req: Request, res: Response, next: NextFunction): Promise<NextFunction| any> {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1]; // Extrai o token do cabeçalho

  if (!token) {
    return res
      .status(401)
      .json({ mensagem: "Acesso negado: Token não fornecido" });
  }

  try {
    // Valida o token
    const tokenValido = new JwtToken();
    const payload = tokenValido.verificaToken(token, segredo);
     console.log(payload)    // Adiciona o payload à requisição, assim podemos acessar o usuário
    req.authUser = payload;
    next(); // Chama o próximo middleware ou controller
  } catch (error) {
    return res
      .status(403)
      .json({ mensagem: "Acesso negado: Token inválido ou expirado" });
  }
}

export { VerificarToken };

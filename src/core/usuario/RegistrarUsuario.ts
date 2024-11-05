import CasoDeUso from "../shared/CasoDeUso";
import Id from "../shared/Id";
import SenhaInterface from "./SenhaInterface";
import { Usuario } from "./Usuario";
import UsuarioDbInterface from "./UsuarioDBInterface";

export type Dto = { nome: string; email: string; senha: string };

// aplicaçao
export default class RegistrarUsuario implements CasoDeUso<Dto, Usuario> {
  constructor(
    private banco: UsuarioDbInterface,
    private senha: SenhaInterface
  ) {}

  async executar(dto: Dto) {
    const senhaCripto = await this.senha.criptarSenha(dto.senha);
    const usuario: Usuario = {
      id: Id.criar(),
      nome: dto.nome,
      email: dto.email,
      senha: senhaCripto,
    };
    this.banco.inserir(usuario);

    return usuario;
  }

  async obeterUsuarios() {
    return await this.banco.obterUsuarios();
  }
}

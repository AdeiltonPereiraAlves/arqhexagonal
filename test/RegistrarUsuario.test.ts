import RegistrarUsuario from '../src/exemplo/core/usuario/RegistrarUsuario'
import Banco from '../src/exemplo/adptadores/db/Banco'
import SenhaCripto from '../src/exemplo/adptadores/auth/SenhaCripto'
import SenhaReal from '../src/exemplo/adptadores/auth/SenhaReal'
test("Deve registrar um usuario", () => {
    const banco: Banco = new Banco()
    const senha : SenhaCripto = new SenhaCripto()
    const senhaReal : any= new SenhaReal()
    const casoUsuo = new RegistrarUsuario(banco, senhaReal)
    const usuario = casoUsuo.executar('Joao da silva', 'joao@email.com', '123456')
    expect(usuario).toHaveProperty('id')
    expect(usuario.nome).toBe("Joao da silva")
})
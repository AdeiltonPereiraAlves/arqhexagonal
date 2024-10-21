import RegistrarUsuario from '../src/core/usuario/RegistrarUsuario';
import PrismaDb from '../src/adptadores/db/PrismaDb';
import SenhaReal from '../src/adptadores/auth/SenhaReal';

test("Deve registrar um usuario", async () => {
    const prisma: PrismaDb = new PrismaDb();
    const senhaReal = new SenhaReal();
    const casoUsuario = new RegistrarUsuario(prisma, senhaReal);
    
    // Registrar um novo usuário
    const usuario = await casoUsuario.executar('jose', 'josee@email.com', '123456');
    expect(usuario).toHaveProperty('id');  // Verifica se o ID foi gerado

    // Verificar o login do usuário
    const loginValido = await casoUsuario.login("josee@email.com", "123456");
    expect(loginValido).toBeTruthy();  // Espera que o login seja válido
});

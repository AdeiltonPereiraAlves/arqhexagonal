

import SenhaReal from "../../src/adptadores/auth/BcCript";
import PrismaDb from "../../src/adptadores/db/PrismaDb";
import RegistrarUsuario from "../../src/core/usuario/RegistrarUsuario";
import LoginUsuario from "../../src/core/usuario/LoginUsuario"
// test("Deve registrar um usuario", async () => {
//     const prisma: PrismaDb = new PrismaDb();
//     const senhaReal = new SenhaReal();
//     const casoUsuario = new RegistrarUsuario(prisma, senhaReal);
//     const casoLogar = new LoginUsuario(prisma, senhaReal)
//     // Registrar um novo usuário
//     const usuario = await casoUsuario.executar('jose', 'joseff5@email.com', '123456');
//     expect(usuario).toHaveProperty('id'); // Verifica se o ID foi gerado


//     // Verificar o login do usuário
//     const loginValido = await casoLogar.logar("joseff5@email.com", "123456");
//     expect(loginValido).toBeTruthy(); // Espera que o login seja válido
// });


// test("Deve logar um usuario", async () => {
//     const prisma: PrismaDb = new PrismaDb();
//     const senhaReal = new SenhaReal();
//     // const casoUsuario = new RegistrarUsuario(prisma, senhaReal);
//     const casoLogar = new LoginUsuario(prisma, senhaReal)
//     const loginValido = await casoLogar.logar("joseff5@email.com", "123456");
//     expect(loginValido).toBeTruthy(); // Espera que o login seja válido
// })
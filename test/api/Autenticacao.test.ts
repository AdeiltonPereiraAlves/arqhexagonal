import axios from "axios";
import { Usuario } from "../../src/core/usuario/Usuario";

const baseUrl = process.env.API_URl;

// test("Deve registra um novo usuario", async () => {
//   const usuario: Partial<Usuario> = {
//     nome: "Margarete da silva",
//     email: "margarete@email.com",
//     senha: "1234",
//   };
//   try {
//     const res = await axios.post(`${baseUrl}/usuario`, usuario);

//     expect(res.status).toBe(201);
//   } catch (e: any) {
//     expect(e.response.status).toBe(400);
//   }
// });

test("Deve logar usuario", async () => {
  const usuario: Partial<Usuario> = {
    email: "margarete@email.com",
    senha: "1234",
  };
  
    const res = await axios.post(`${baseUrl}/usuario/login`, usuario);

    expect(res.status).toBe(200);
  
});

import { useRef } from "react";

function FormLogin() {
  const formulario = useRef<HTMLFormElement>(null);

  async function handleLogin() {
    const data = new URLSearchParams(new FormData(formulario.current!) as any);

    fetch("http://localhost:3000/login", {
      method: "post",
      body: data,
    });
  }

  return (
    <>
      <form action="" method="POST" ref={formulario}>
        <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
        <input type="text" name="nomeBarbearia" id="nomeBarbearia" />

        <label htmlFor="senha">Senha: </label>
        <input type="text" name="senha" id="senha" />
      </form>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default FormLogin;

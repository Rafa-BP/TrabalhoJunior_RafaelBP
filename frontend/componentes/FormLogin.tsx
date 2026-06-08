import { useRef } from "react";
import type { Usuario } from "../interfaces";

function FormLogin({
  setInfo,
}: {
  setInfo: React.Dispatch<React.SetStateAction<Usuario | null>>;
}) {
  const formulario = useRef<HTMLFormElement>(null);

  async function handleLogin() {
    const formData = new URLSearchParams(
      new FormData(formulario.current!) as any,
    );

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "post",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Erro do servidor.");
      }
      const data = await response.json();
      console.log(data);

      if (data["status"] != "ok") {
        throw new Error("Erro ao entrar na conta.");
      }

      setInfo(data.usuario);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Entre em sua conta!</h1>

      <form action="" method="POST" ref={formulario} id="container-form login">
        <div className="container-col">
          <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
          <input type="text" name="nomeBarbearia" id="nomeBarbearia" />
        </div>

        <div className="container-col">
          <label htmlFor="senha">Senha: </label>
          <input type="text" name="senha" id="senha" />
        </div>
      </form>
      <button onClick={handleLogin} className="botaoPrincipal">
        Login
      </button>
    </>
  );
}

export default FormLogin;

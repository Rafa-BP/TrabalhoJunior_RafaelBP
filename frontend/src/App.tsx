import { useState } from "react";
import "./App.css";

import FormCriar from "../componentes/FormCriar";
import FormLogin from "../componentes/FormLogin";

import type { Usuario } from "../interfaces.ts";

function App() {
  const [logar, setLogar] = useState<boolean>(true);
  const [info, setInfo] = useState<Usuario | null>(null);

  function handleMudarForm(): void {
    setLogar(!logar);
  }

  function handleSairConta() {
    setInfo(null);
  }

  async function handleRemoverCadastro() {
    try {
      const infoRem = new URLSearchParams(info as any);

      const response = await fetch("http://localhost:3000/remover", {
        method: "post",
        body: infoRem,
      });
      if (!response.ok) {
        throw new Error("Erro do servidor.");
      }
      const data = await response.json();
      console.log(data);

      if (data["status"] != "ok") {
        throw new Error("Erro ao remover conta.");
      }

      setInfo(null);
    } catch (error) {
      console.log(error);
    }
  }

  if (!info)
    return (
      <>
        <img src="" alt="Imagem do interior de uma barbearia." />
        <main>
          {logar ? (
            <FormCriar setInfo={setInfo} />
          ) : (
            <FormLogin setInfo={setInfo} />
          )}
          <button onClick={handleMudarForm}>
            {logar ? "Realizar Login" : "Criar Conta"}
          </button>
        </main>
      </>
    );
  return (
    <>
      <main>
        <h1>{info["nomeBarbearia"]}</h1>
        <button onClick={handleSairConta}>Encerrar Sessão</button>
        <button onClick={handleRemoverCadastro}>Remover Cadastro</button>
      </main>
    </>
  );
}

export default App;

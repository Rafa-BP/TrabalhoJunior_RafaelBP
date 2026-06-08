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
      <main className="container">
        <img
          src="../public/imagemBarbearia.jpg"
          alt="Imagem do interior de uma barbearia."
          id="imagemPrincipal"
        />
        <aside id="container-aside">
          {logar ? (
            <>
              <FormCriar setInfo={setInfo} />
              <p>Já tem cadastro?</p>
            </>
          ) : (
            <>
              <FormLogin setInfo={setInfo} />
              <p>Não tem cadastro?</p>
            </>
          )}
          <button onClick={handleMudarForm} className="botaoSecundario">
            {logar ? "Entrar na conta" : "Cadastrar barbearia"}
          </button>
        </aside>
      </main>
    );
  return (
    <>
      <main className="container-col">
        <h2>{info["nomeBarbearia"]}</h2>
        <p>Responsavel: {info["nomeResponsavel"]}</p>
        <div className="container">
          <button onClick={handleSairConta} className="botaoSecundario">Encerrar Sessão</button>
          <button onClick={handleRemoverCadastro} className="botaoSecundario">Remover Cadastro</button>
        </div>
      </main>
    </>
  );
}

export default App;

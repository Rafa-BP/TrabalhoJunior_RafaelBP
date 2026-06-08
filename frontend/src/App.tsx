import { useState } from "react";
import "./App.css";

import FormCreate from "../components/FormCreate.tsx";
import FormLogin from "../components/FormLogin.tsx";

import imagem from "../public/imagembarbearia.png";

import type { User } from "../types/interfaces.ts";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [info, setInfo] = useState<User | null>(null);

  function handleChangeForm(): void {
    setIsLogin(!isLogin);
  }

  function handleEndSession(): void {
    setInfo(null);
  }

  function handleChangeInfo(User: User): void {
    setInfo(User);
  }

  async function handleRemoverCadastro() {
    try {
      const infoRem = new URLSearchParams(info as any);

      const response = await fetch(
        "https://testejunior-rafaelbp.onrender.com/remove",
        {
          method: "post",
          body: infoRem,
        },
      );
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

  if (!info) {
    return (
      <main className="container">
        <img
          src={imagem}
          alt="Imagem do interior de uma barbearia."
          id="imagemPrincipal"
        />
        <aside id="container-aside">
          {isLogin ? (
            <>
              <FormLogin onChange={handleChangeInfo} />
              <p>Não tem cadastro?</p>
            </>
          ) : (
            <>
              <FormCreate onChange={handleChangeInfo} />
              <p>Já tem cadastro?</p>
            </>
          )}
          <button onClick={handleChangeForm} className="botaoSecundario">
            {isLogin ? "Cadastrar barbearia" : "Entrar na conta"}
          </button>
        </aside>
      </main>
    );
  }

  return (
    <>
      <main className="container-col">
        <h2>{info["nomebarbearia"]}</h2>
        <p>Responsavel: {info["nomeresponsavel"]}</p>
        <div className="container">
          <button onClick={handleEndSession} className="botaoSecundario">
            Encerrar Sessão
          </button>
          <button onClick={handleRemoverCadastro} className="botaoSecundario">
            Remover Cadastro
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

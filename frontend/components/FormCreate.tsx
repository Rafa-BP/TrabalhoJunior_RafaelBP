import { useRef, useState } from "react";
import type { User } from "../types/interfaces.ts";

function FormCreate({ onChange }: { onChange: (User: User) => void }) {
  const [mensagem, setMensagem] = useState<string>("");

  const form = useRef<HTMLFormElement>(null);

  async function handleCreate() {
    const formData = new URLSearchParams(new FormData(form.current!) as any);

    try {
      const response = await fetch(
        "https://testejunior-rafaelbp.onrender.com/create",
        {
          method: "post",
          body: formData,
        },
      );
      if (!response.ok) {
        throw new Error("Erro do servidor.");
      }
      const data = await response.json();

      if (data["status"] != "ok") {
        setMensagem(data["message"]);
        throw new Error("Erro ao criar conta.");
      }

      onChange(data.usuario);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Cadastre sua barbearia!</h1>
      <form action="" method="POST" ref={form} id="container-form">
        <div className="container-col" id="nomeBarGrid">
          <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
          <input type="text" name="nomebarbearia" id="nomeBarbearia" maxLength={200}/>
        </div>

        <div className="container-col" id="nomeRespGrid">
          <label htmlFor="nomeResponsavel">Nome do(a) Responsavel: </label>
          <input type="text" name="nomeresponsavel" id="nomeResponsavel" maxLength={200}/>
        </div>

        <div className="container-col" id="senhaGrid">
          <label htmlFor="senha">Senha: </label>
          <input type="password" name="senha" id="senha" minLength={8} maxLength={30}/>
        </div>

        <div className="container-col" id="emailGrid">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" maxLength={200}/>
        </div>

        <div className="container-col" id="telefoneGrid">
          <label htmlFor="telefone">Telefone: </label>
          <input type="telephone" name="telefone" id="telefone" maxLength={11}/>
        </div>

        <div className="container-col" id="estadoGrid">
          <label htmlFor="estado">Estado: </label>
          <input type="text" name="estado" id="estado" maxLength={20}/>
        </div>

        <div className="container-col" id="cidadeGrid">
          <label htmlFor="cidade">Cidade: </label>
          <input type="text" name="cidade" id="cidade" maxLength={100}/>
        </div>

        <div className="container-col" id="numCadeirasGrid">
          <label htmlFor="numCadeiras">Num. Cadeiras: </label>
          <input type="number" name="numcadeiras" id="numCadeiras" min={1}/>
        </div>
      </form>
      <p id="mensagemErro">{mensagem}</p>
      <button onClick={handleCreate} className="botaoPrincipal">
        Cadastrar Barbearia
      </button>
    </>
  );
}

export default FormCreate;

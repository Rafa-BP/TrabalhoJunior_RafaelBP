import { useRef } from "react";

function FormCriar() {
  const formulario = useRef<HTMLFormElement>(null);

  async function handleCriar() {
    const formData = new URLSearchParams(
      new FormData(formulario.current!) as any,
    );

    try {
      const response = await fetch("http://localhost:3000/criar", {
        method: "post",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("AAAAAAAAAAAA");
      }
      const data = await response.json()

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form action="" method="POST" ref={formulario}>
        <label htmlFor="nomeBarbearia">Nome da Barbearia: </label>
        <input type="text" name="nomeBarbearia" id="nomeBarbearia" />

        <label htmlFor="nomeResponsavel">Nome do(a) Responsavel: </label>
        <input type="text" name="nomeResponsavel" id="nomeResponsavel" />

        <label htmlFor="senha">Senha: </label>
        <input type="text" name="senha" id="senha" />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="telefone">Telefone: </label>
        <input type="telephone" name="telefone" id="telefone" />

        <label htmlFor="estado">Estado: </label>
        <input type="text" name="estado" id="estado" />

        <label htmlFor="cidade">Cidade: </label>
        <input type="text" name="cidade" id="cidade" />

        <label htmlFor="numCadeiras">Numero de Cadeiras: </label>
        <input type="number" name="numCadeiras" id="numCadeiras" />
      </form>
      <button onClick={handleCriar}>Cadastrar Barbearia</button>
    </>
  );
}

export default FormCriar;

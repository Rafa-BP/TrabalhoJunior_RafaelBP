import { useState } from "react";
import "./App.css";

import FormCriar from "../componentes/FormCriar";
import FormLogin from "../componentes/FormLogin";

import type { Usuario } from "../interfaces.ts"

function App() {
  const [logar, setLogar] = useState<boolean>(true);
  const [info, setInfo] = useState<Usuario | null>(null);

  function handleMudarForm(): void {
    setLogar(!logar);
  }

  if (!info) return (
    <>
      <img src="" alt="Imagem do interior de uma barbearia." />
      <main>
        { logar 
        ? <FormCriar setInfo={setInfo} /> 
        : <FormLogin setInfo={setInfo} />
        }
        <button onClick={handleMudarForm}>
          {logar ? "Realizar Login" : "Criar Conta"}
        </button>
      </main>
    </>
  )
  return (
    <>
      <main>
        <h1>{info["nomeBarbearia"]}</h1>
      </main>
    </>
  );
}

export default App;

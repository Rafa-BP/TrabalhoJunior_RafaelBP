import { useState } from "react";
import "./App.css";

import FormCriar from "../componentes/FormCriar";
import FormLogin from "../componentes/FormLogin";

function App() {
  const [test, setTest] = useState<boolean>(true);

  function handleMudarForm(): void {
    setTest(!test);
  }

  return (
    <>
      <img src="" alt="Imagem do interior de uma barbearia." />
      <main>
        { test 
        ? <FormCriar /> 
        : <FormLogin />
        }
        <button onClick={handleMudarForm}>
          {test ? "Realizar Login" : "Criar Conta"}
        </button>
      </main>
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'

import FormCriar from "../componentes/FormCriar"
import FormLogin from "../componentes/FormLogin"

function App() {
  const [test, setTest] = useState<boolean>(false);

  function handleMudarForm(): void {
    setTest(!test);
  }

  return (
    <>
      <img src="" alt="" />
      <main>
        { test 
        ? <FormCriar/>
        : <FormLogin/>
        }
        <button onClick={handleMudarForm}>{test ? "Efetuar Login" : "Criar Conta"}</button>
      </main>
    </>

  )
}

export default App

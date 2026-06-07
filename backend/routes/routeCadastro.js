import router from "express"
import cadastroController from "../controllers/cadastroController.js"

const rotaCadastro = router();

rotaCadastro.post("/criar", cadastroController.criarConta)
rotaCadastro.post("/login", cadastroController.logarConta)
rotaCadastro.post("/remover", cadastroController.removerConta)

export default rotaCadastro
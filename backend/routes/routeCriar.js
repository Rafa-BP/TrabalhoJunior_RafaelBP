import router from "express"
import criarController from "./controllers/criarController.js"

const rotaCriar = router();

rotaCriar.post("/", criarController.criarConta)

export default rotaCriar
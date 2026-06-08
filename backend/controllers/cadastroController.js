import queries from "../db/queries.js";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

async function criarConta(req, res) {
  const hash = bcrypt.hashSync(req.body["senha"], salt);
  try {
    await queries.criarConta({ ...req.body, senha: hash });
    res.json({ status: "ok", usuario: req.body });
  } catch (error) {
    res.json({ status: "error", usuario: req.body, message: error });
  }
}

async function logarConta(req, res) {
  try {
    const info = await queries.pegarUsuarioPorNome(req.body["nomeBarbearia"]);
    const resultado = await bcrypt.compareSync(
      req.body["senha"],
      info["senha"],
    );

    if (!resultado) {
      res.json({
        status: "error",
        usuario: req.body,
        message: "Credenciais incorretas.",
      });
    }

    res.json({ status: "ok", usuario: req.body });
  } catch (error) {
    res.json({ status: "error", usuario: req.body, message: error });
  }
}

async function removerConta(req, res) {
  console.log(req.body)
  try {
    await queries.deletarConta(req.body["nomeBarbearia"]);
    res.json({ status: "ok", usuario: req.body });
  } catch (error) {
    res.json({ status: "error", usuario: req.body, message: error });
  }
}

export default {
  criarConta,
  logarConta,
  removerConta,
};

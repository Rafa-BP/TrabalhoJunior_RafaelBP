import queries from "../../db/queries.js";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

async function criarConta(req, res) {
  const hash = bcrypt.hashSync(req.body["senha"], salt);

  try {
    await queries.criarConta({...req.body, senha: hash});
    res.json({status: "ok", usuario: req.body})
  } catch (error) {
    res.json({status: "error", usuario: req.body, message: error})
  }
}

export default {
  criarConta,
};

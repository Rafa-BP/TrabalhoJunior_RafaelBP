import queries from "../db/queries.js";
import bcrypt from "bcryptjs";

async function loginAccount(req, res) {
  try {
    const info = await queries.getUserByName(req.body["nomebarbearia"]);

    if (info) {
      const result = await bcrypt.compareSync(
        req.body["senha"],
        info["senha"],
      );

      if (!result) {
        res.json({
          status: "error",
          usuario: req.body,
          message: "Credenciais incorretas.",
        });
      }
      res.json({ status: "ok", usuario: info });
    }

    res.json({
      status: "error",
      usuario: req.body,
      message: "Credenciais incorretas.",
    });
  } catch (error) {
    res.json({ status: "error", usuario: req.body, message: error });
  }
}

export default {
  loginAccount,
};

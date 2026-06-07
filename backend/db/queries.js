import pool from "./pool.js";

async function criarConta(data) {
  await pool.query(
    "INSERT INTO barbearias VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      data["nomeBarbearia"],
      data["nomeResponsavel"],
      data["senha"],
      data["email"],
      data["telefone"],
      data["estado"],
      data["cidade"],
      data["numCadeiras"],
    ],
  );
}

async function pegarUsuarioPorNome(nomeBarbearia) {
  const resultado = await pool.query(
    "SELECT * FROM barbearias WHERE nomeBarbearia = ($1)",
    [nomeBarbearia],
  );
  return resultado.rows[0];
}

async function deletarConta(nomeBarbearia) {
  await pool.query("DELETE FROM barbearias WHERE nomeBarbearia = ($1)", [
    nomeBarbearia,
  ]);
}

export default {
  criarConta,
  pegarUsuarioPorNome,
  deletarConta,
};

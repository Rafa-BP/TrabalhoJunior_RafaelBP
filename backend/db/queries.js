import { json } from "express";
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

export default {
  criarConta,
};

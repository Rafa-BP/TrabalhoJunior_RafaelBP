import queries from "../db/queries.js";

async function criarConta(req, res) {
    queries.criarConta(req.body);
}

export default {
    criarConta,
};
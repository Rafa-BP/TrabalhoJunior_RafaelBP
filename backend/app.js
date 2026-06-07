import express, { json } from "express"
import cors from "cors"

import rotaCadastro from "./routes/routeCadastro.js";

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use("/", rotaCadastro);

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
})
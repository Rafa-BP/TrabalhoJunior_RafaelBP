import express, { json } from "express"
import cors from "cors"

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.post("/criar", (req, res) => {
    console.log(req.body);
    res.json({login: "ok"});
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.json({login: "ok"});
})

app.use("/", (req, res) => {
    console.log("recebeu algo");
})

app.listen(3000, (error) => {
    console.log("sup")
    if (error) {
        console.log(error);
    }
})
import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";
import cors from "cors";

const app = express();

// Middleware'ler
app.use(bodyParser.json());
app.use(cors());

// Kullanıcı rotalarını tanımlayın
app.use("/users", usersRouter);

// Tanımlanmamış tüm rotalar için 404 yanıtı
app.use("*", (req, res) => {
    res.status(404).send("Page not found");
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

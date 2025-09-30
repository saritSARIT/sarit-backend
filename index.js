
const express = require("express");
const cors = require("cors");
const { books, users, router } = require("./routs");
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



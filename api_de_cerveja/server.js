const express = require("express")
const port = 3000
const routes = require("./routes/routes.js")

const app = express()
app.use(express.json());
app.use("/cerveja", routes)

app.listen(port, () => {
    console.log("Servidor express rodando!")
})
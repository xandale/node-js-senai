const express = require("express")
const port = 3000
const {router} = require("./routes/router.js")

const app = express()
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log("Servidor express rodando!")
})
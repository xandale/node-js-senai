const express = require("express")
const port = 3000;
// use a rota so depois de pronta para não dar erro
const {router} = require("./routes/routes")

const app  = express()
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log("Servidor express rodando!")
})

// nome: alexandre goedert amancio
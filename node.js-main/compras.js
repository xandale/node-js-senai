// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000

// app.use(bodyParser.json())

// let compras = [
//     { id: 1, produto: 'iPhone 16', preco: 6000 },
//     { id: 2, produto: 'PlayStation 2', preco: 5000 },
//     { id: 3, produto: 'GameBoy Color', preco: 2000 }
// ]

// app.get('/', (req, res) => {
//     res.json({ mensagem: 'Servidor disponível' })
// })

// app.get('/compras', (req, res) => {
//     res.json(compras)
// })

// app.post('/cadastrar', (req, res) => {
//     const novoProduto = req.body
//     compras.push(novoProduto)
//     res.json(compras)
// })

// app.get('/valor-total', (req, res) => {
//     // let valorTotal = 0
//     // compras.forEach((compra) => {
//     //     valorTotal += compra.preco
//     // })
//     const valorTotal = compras.reduce((total, compra) => total + compra.preco, 0)
//     res.json({ valorTotal })
// })

// app.delete('/deletar/:id', (req, res) => {
//     const idPraRemover = Number(req.params.id)
//     compras = compras.filter((compra) => idPraRemover !== compra.id)
//     res.json(compras)
// })

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`)
// })
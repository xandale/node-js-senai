import express from 'express'
// método do express pra definição de rotas da API => express.Router()
const roteador = express.Router()
// importar função criada no controller
import  { listarFilmes, listarFilmesPorCategoria, criarFilme, atualizarFilme, excluirFilme } from '../controllers/filmes.js'

// Definição das rotas da API
// (GET) /filmes - Listagem geral de filmes
roteador.get('/filmes', listarFilmes)
// (GET) /filmes/:categoria (GET) – Listar filmes com a categoria informada
roteador.get('/filmes/:categoria', listarFilmesPorCategoria)
// (POST) /filmes - Cadastrar novo filme (receber dados via body)
roteador.post('/filmes', criarFilme)
// (PUT)  /filmes/:id - Atualizar dados de um filme (receber dados via body)
roteador.put('/filmes/:id', atualizarFilme)
// (DELETE) /filmes/:id - Apagar filme
roteador.delete('/filmes/:id', excluirFilme)

// Exportar para usar no servidor.js
export { roteador }
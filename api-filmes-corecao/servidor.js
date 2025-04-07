import express from 'express'
// Importar o arquivo de rotas
import { roteador } from './routes/filmes.js'

const servidor = express()
// Utilizar o bodyParser nativo do express
servidor.use(express.json())
// Utilizar o arquivo de rotas
servidor.use(roteador)

// Indicar a porta que o servidor vai rodar
servidor.listen(3000, () => console.log('Servidor iniciado'))
// SERVIDOR: VAI INICIAR O SERVIDOR INDICANDO SUA PORTA E CONECTAR COM AS ROTAS
// IMPORTAR O PACOTE EXPRESS E INICIAR UMA INSTANCIA
import express from 'express'
import { rotas } from './routes/cervejaRoutes.js'
const servidor = express()

// PERMITIR QUE O SERVIDOR RECEBA JSON NAS REQUISIÇÕES
servidor.use(express.json())

// CONECTAR COM UM ARQUIVO DE ROTAS
servidor.use(rotas)

// INDICAR QUE A PORTA QUE O SERVIDOR VAI RODAR É 3000
servidor.listen(3000, () => console.log('Servidor iniciado'))
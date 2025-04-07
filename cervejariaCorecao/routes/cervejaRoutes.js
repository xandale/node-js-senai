// IMPORTAR O EXPRESS E O MÉTODO Router() DO EXPRESS
import express from 'express'
import { buscarPeloNome, buscarPelaNacionalidade, buscarOrdenandoPeloAbv, buscarPeloTipo, buscarPeloNomeParcial } from '../controllers/cerveja.js'
const rotas = express.Router()

// DEFINIR QUAIS ENDEREÇOS A API VAI POSSUIR E CONECTAR COM CONTROLLER
// rotas.METODO('/ENDERECO', CONTROLLER)
rotas.get('/nome/:nomePesquisado', buscarPeloNome)
rotas.get('/nacionalidade/:nacionalidade', buscarPelaNacionalidade)
rotas.get('/abv', buscarOrdenandoPeloAbv)
rotas.get('/tipo/:tipo', buscarPeloTipo)
rotas.get('/nome-parcial/:nomePesquisado', buscarPeloNomeParcial)

// EXPORTAR AS ROTAS
export { rotas }
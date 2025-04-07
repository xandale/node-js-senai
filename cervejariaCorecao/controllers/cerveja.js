// USAR A CONEXAO DO BANCO DE DADOS
import { conexao } from "../banco.js"

const buscarPeloNome = (req, res) => {
    // RECEBER PARAMETRO nomePesquisado DA REQUISICAO
    const nome = req.params.nomePesquisado
    // DEFINIR QUAL VAI SER O COMANDO SQL
    const comando = 'SELECT * FROM cervejas WHERE nome = $1'
    const valoresDoCifrao = [nome]
    // RODAR O COMANDO
    conexao.query(comando, valoresDoCifrao)
        .then(resultado => {
            // REALIZAR UMA RESPOSTA
            res.status(200).send({ dados: resultado.rows })
        })
        .catch(erro => {
            // REALIZAR UMA RESPOSTA DE ERRO
            res.status(500).send({ mensagem: 'Erro na consulta' })
        })
}
const buscarPelaNacionalidade = (req, res) => {
    // RECEBER PARAMETRO nacionalidade DA REQUISICAO
    const nacionalidade = req.params.nacionalidade
    // DEFINIR QUAL VAI SER O COMANDO SQL
    const comando = 'SELECT * FROM cervejas WHERE nacionalidade = $1'
    const valoresDoCifrao = [nacionalidade]
    // RODAR O COMANDO
    conexao.query(comando, valoresDoCifrao)
        .then(resultado => {
            // REALIZAR UMA RESPOSTA DE SUCESSO
            res.status(200).send({ dados: resultado.rows })
        })
        .catch(erro => {
            // REALI    ZAR UMA RESPOSTA DE ERRO
            res.status(500).send({ mensagem: 'Erro na consulta' })
        })
}
const buscarOrdenandoPeloAbv = (req, res) => {
    const comando = 'SELECT * FROM cervejas ORDER BY abv DESC'
    // RODAR O COMANDO
    conexao.query(comando)
        .then(resultado => {
            // REALIZAR UMA RESPOSTA
            res.status(200).send({ dados: resultado.rows })
        })
        .catch(erro => {
            // REALIZAR UMA RESPOSTA DE ERRO
            res.status(500).send({ mensagem: 'Erro na consulta' })
        })
}
const buscarPeloTipo = (req, res) => {
    // RECEBER PARAMETRO tipo DA REQUISICAO
    const tipo = req.params.tipo
    // DEFINIR QUAL VAI SER O COMANDO SQL
    const comando = 'SELECT * FROM cervejas WHERE tipo = $1'
    const valoresDoCifrao = [tipo]
    // RODAR O COMANDO
    conexao.query(comando, valoresDoCifrao)
        .then(resultado => {
            // REALIZAR UMA RESPOSTA
            res.status(200).send({ dados: resultado.rows })
        })
        .catch(erro => {
            // REALIZAR UMA RESPOSTA DE ERRO
            res.status(500).send({ mensagem: 'Erro na consulta' })
        })
}
const buscarPeloNomeParcial = (req, res) => {
    // RECEBER PARAMETRO nomePesquisado DA REQUISICAO
    const nome = req.params.nomePesquisado
    // DEFINIR QUAL VAI SER O COMANDO SQL
    const comando = `SELECT * FROM cervejas WHERE nome ILIKE '%${nome}%'`
    // RODAR O COMANDO
    conexao.query(comando)
        .then(resultado => {
            // REALIZAR UMA RESPOSTA
            res.status(200).send({ dados: resultado.rows })
        })
        .catch(erro => {
            // REALIZAR UMA RESPOSTA DE ERRO
            res.status(500).send({ mensagem: 'Erro na consulta' })
        })
}
export { buscarPeloNome, buscarPelaNacionalidade, buscarOrdenandoPeloAbv, buscarPeloTipo, buscarPeloNomeParcial }
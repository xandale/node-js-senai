import { Heroi } from "../models/Heroi.js"

const listarHerois = async (req, res) => {
    try {
        // Listar dados
        const listaHerois = await Heroi.findAll()
        res.status(200).send({ listaHerois })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao buscar herois' })
    }
}

const criarHeroi = async (req, res) => {
    try {
        // Criar dados
        const { nome, pontosDePoder } = req.body
        if (!nome || !pontosDePoder) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const novoHeroi = { nome, pontosDePoder }
        const heroiCriado = await Heroi.create(novoHeroi)
        res.status(201).send({ heroiCriado })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao criar herois' })
        console.log(erro)
    }
}

const atualizarHeroi = async (req, res) => {
    try {
        // Atualizar dados
        const { nome, pontosDePoder } = req.body
        const { id } = req.params
        if (!nome || !pontosDePoder || !id) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const heroiAtualizado = { nome, pontosDePoder }
        const heroiCriado = await Heroi.update(heroiAtualizado, { where: { id } })
        res.status(201).send({ heroiCriado })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao atualizar herois' })
        console.log(erro)
    }
}

const excluirHeroi = async (req, res) => {
    try {
        // Excluir dados
        const { id } = req.params
        if (!id) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const heroiExcluido = await Heroi.destroy({ where: { id } })
        res.status(200).send({ heroiExcluido })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao atualizar herois' })
        console.log(erro)
    }
}

export { listarHerois, criarHeroi, atualizarHeroi, excluirHeroi } 
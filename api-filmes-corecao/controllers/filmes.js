const filmes = [
    { id: 1, titulo: 'Forrest Gump', categoria: 'drama' },
    { id: 2, titulo: 'A rede social', categoria: 'drama' },
    { id: 3, titulo: 'Shrek', categoria: 'animacao' },
]

const listarFilmes = (req, res) => {
    res.status(200).send(filmes)
}

const listarFilmesPorCategoria = (req, res) => {
    // Reconhecer a categoria informada pelo usuario
    // const categoria = req.params.categoria
    const { categoria } = req.params
    const filmesFiltrados = filmes.filter(apelido => apelido.categoria.toLowerCase() == categoria.toLowerCase())
    // Verificar se encontrou filmesFiltrados
    if (filmesFiltrados.length === 0) {
        // status 204 = no content => nao exibe resposta
        // status 404 = not found => exibe resposta
        res.status(404).send({ mensagem: 'Nenhum filme encontrado' })
    } else {
        res.status(200).send({ filmes: filmesFiltrados })
    }
}

const criarFilme = (req, res) => {
    // Reconhecer id, titulo e categoria passados no body da requisição
    const { id, titulo, categoria } = req.body
    // Validar se as 3 informações foram fornecidas
    if (!id || !titulo || !categoria) {
        res.status(400).send({ erro: 'Dados incompletos' })
        return
    }
    console.log(id.toString().length)
    // Validar se os valores possuem 1 caractere ou mais
    if (id.toString().length === 0 || titulo.toString().length === 0 || categoria.toString().length === 0) {
        res.status(400).send({ erro: 'Dados incompletos' })
        return
    }
    const novoFilme = { id, titulo, categoria }
    // Adicionar um novo filme
    filmes.push(novoFilme)
    res.status(201).send({ filme: novoFilme })
}

const atualizarFilme = (req, res) => {
    // Importar o id de params
    const { id } = req.params
    // Importar o titulo e categoria do body
    const { titulo, categoria } = req.body
    // Fazer as mesmas validações do POST

    // Encontrar o elemento que a pessoa quer atualizar
    const indiceAtualizar = filmes.findIndex(filme => filme.id === Number(id))
    // O indice pode ser -1 (não encontrar nenhum elemento)
    if (indiceAtualizar === -1){
        res.status(404).send({ erro: 'Filme nao localizado' })
        return
    }
    // Alterar o indice do elemento com id informado pelo usuario
    filmes[indiceAtualizar] = { id, titulo, categoria }
    // Exibir resposta ao usuario
    res.status(200).send({ filme: filmes[indiceAtualizar]})
    
    // Alterar o indice do elemento com id informado pelo usuario
    // filmes.splice(indiceAtualizar, 1, { id, titulo, categoria })
}

const excluirFilme = (req, res) => {    
    const { id } = req.params
    if (!id) {
        res.status(400).send({ erro: 'Dados incompletos' })
        return
    }
    const indiceExclusao = filmes.findIndex(filme => filme.id === Number(id))
    if (indiceExclusao === -1){
        res.status(404).send({ erro: 'Filme nao localizado' })
        return
    }
    // Utilizar o splice para excluir
    // lista.splice(indiceInicial, quantidadeItensExcluir)
    filmes.splice(indiceExclusao, 1)

    res.status(200).send({ filme: filmes[indiceExclusao]})
    // Utilizar o splice para atualizar/substituir
    // lista.splice(indiceInicial, quantidadeItensExcluir, novosItens)
}

// Exportar para usar no router
export { listarFilmes, listarFilmesPorCategoria, criarFilme, atualizarFilme, excluirFilme }
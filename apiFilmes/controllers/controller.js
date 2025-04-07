const filmes = [
    { id: 1, titulo: 'Forest Gump', categoria: 'drama' },
    { id: 2, titulo: 'A rede social', categoria: 'drama' }
]

exports.getAll = (req, res) => {
    res.status(200).json(filmes);
};

exports.getFilmeCategoria = (req, res) => {
    const categoria = req.params.categoria.toLowerCase();
    const filmesFiltrados = filmes.filter(filme => filme.categoria.toLowerCase() === categoria);

    if (filmesFiltrados.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum filme encontrado para essa categoria" });
    }

    res.status(200).json(filmesFiltrados);
};

exports.postFilmes = (req, res) => {
    filmes.push(req.body);
    res.status(200).json(filmes);
};

exports.putFilmes = (req, res) => {
    const idFilme = parseInt(req.params.idFilme);
    const body = req.body
    const index = filmes.findIndex(filme => filme.id === idFilme);

    if (index < 0) {
        return res.status(404).json({ mensagem: "Nenhum filme encontrado para essa categoria" });
    }

    const novoFilme = {
        id: idFilme,
        categoria: body.categoria,
        titulo: body.titulo
    }

    filmes[index] = novoFilme
    // filmes[index] = { ...body, id: idFilme }

    res.status(200).json(filmes[index]);
}

exports.deleteFilme = (req, res) => {
    const idFilme = parseInt(req.params.idFilme);
    const index = filmes.findIndex(filme => filme.id === idFilme);
    if (index < 0) {
        return res.status(404).json({ mensagem: "Filme não encontrado" });
    }
    filmes.splice(index, 1);

    res.json({ mensagem: "Filme removido com sucesso!" });

} 
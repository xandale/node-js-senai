let livros = [
]
// adicionando livros
exports.postLivro= (req, res) => {
    console.log("Criando novo livro");
    const { id, nome, genero, ano } = req.body;

    if (!id || !nome || !genero || !ano) {
        return res.status(400).json({ error: "Dados incompletos" });
    }
    const novoLivro = { id, nome, genero, ano };
    livros.push(novoLivro);
    res.status(201).json(livros);
};
// listando todos os livros
exports.getAll = (req, res) => {
    console.log("Buscando todos os livros")
    res.status(200).json(livros)
}
// buscando pelo id
exports.getById = (req, res) => {
    console.log("Buscando livro pelo id");
    const idBuscado = req.params.id;
    const itemEncontrado = livros.find(livro => livro.id === idBuscado);

    if (!itemEncontrado) {
        return res.status(404).json({ error: "Item não encontrado" });
    }

    res.status(200).json(itemEncontrado);
};

// busca por autor etc...
exports.getByFilter = (req, res) => {
    console.log("Buscando livros por nome, gênero ou ano");

    const filtro = req.params.filtro.toLowerCase();

    const livrosFiltrados = livros.filter(livro =>
        livro.nome.toLowerCase().includes(filtro) ||
        livro.genero.toLowerCase().includes(filtro) ||
        livro.ano.toString() === filtro
    );
    if (livrosFiltrados.length === 0) {
        return res.status(404).json({ error: "Nenhum livro encontrado" });
    }
    res.status(200).json(livrosFiltrados);
};
// buscando pelo mais recente
exports.getByRecentes = (req, res) => {
    console.log("Buscando livros mais recentes");
    const livrosRecentes = [...livros].sort((a, b) => b.dataCriacao - a.dataCriacao);
    if (livrosRecentes.length > 0) {
      res.status(200).json({ mensagem: "Livros encontrados!", livros: livrosRecentes });
    } else {
      res.status(404).json({ mensagem: "Nenhum livro encontrado!" });
    }
  };
  
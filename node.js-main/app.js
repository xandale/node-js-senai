import express from 'express'
const app = express(); 
app.use(express.json());


const livros = {
    aventura: [
        {id:1, nome:'Indiana Jhones'}
    ],
    suspense: [
        {id:1, nome:'O iluminado'}
    ],
    romance: [
        {id:1, nome:'Orgulho e Preconceito'}
    ],
    ficcao: [
        {id:1, nome:'Duna'}
    ]
}
// todas as categorias de livros
app.get('/livros', (req, res) => {
    res.json(livros)
})
// adicionar livro de aventura
app.post('/aventura', (req, res) => {
    const novoLivro= req.body
    livros.aventura.push(novoLivro) 
    res.json(livros.aventura)
})
// adicionar livro de suspense
app.post('/suspense', (req, res) => {
    const novoLivro= req.body
    livros.suspense.push(novoLivro) 
    res.json(livros.suspense)
})
// adicionar livro de romance
app.post('/romance', (req, res) => {
    const novoLivro= req.body
    livros.romance.push(novoLivro) 
    res.json(livros.romance)
})
// adicionar livro de ficção    
app.post('/ficcao', (req, res) => {
    const novoLivro= req.body
    livros.ficcao.push(novoLivro) 
    res.json(livros.ficcao)
})

// Definindo a rota GET para acessar livros de uma categoria específica
app.get('/livros/:categoria', (req, res) => {
    
    // Acessando o parâmetro da URL, que é a categoria solicitada
    // req.params.categoria vai pegar o valor de :categoria na URL (ex: "aventura", "romance", etc)
    if(livros[req.params.categoria]) {
        
        // Se a categoria existir no objeto 'livros', retornamos os livros dessa categoria em formato JSON
        // Exemplo: se for 'aventura', retornará o array de livros de aventura
        res.json(livros[req.params.categoria]);
    } else {
        
        // Se a categoria não existir no objeto 'livros', retornamos um erro 404 com uma mensagem
        // O status 404 é utilizado para indicar que o recurso não foi encontrado
        res.status(404).json({ erro: "Categoria não encontrada" });
    }
});


app.listen(3000, () => console.log('Servidor Iniciado'))


//livros (GET) – Listagem geral de livros
//livros/aventura (POST) – Adicionar na lista de aventura/livros/suspense (POST) – Adicionar na lista de suspense/livros/romance (POST) – Adicionar na lista de romance/livros/ficção (POST) – Adicionar na lista de ficção/livros/:categoria (GET) – Listagem de livros da categoria
const express = require ('express');
const path = require ('path')

const app = express();
const PORT = 3000;
app.use(express.json());

// Serve os arquivos estáticos (como HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));


// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

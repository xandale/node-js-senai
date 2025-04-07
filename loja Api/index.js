const express = require ('express');
const app = express();
const PORT = 3000;
const routes = require("./routes/taskRoutes.js")
app.use(express.json());
app.use("/tasks", routes);


// Iniciando o servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})



// 1️⃣ API Simples de Tarefas (To-Do List)
// http://localhost:3000
// Crie uma API que permite adicionar, listar, atualizar e excluir tarefas usando Express e um arquivo JSON como banco de dados.
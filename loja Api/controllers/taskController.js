//Importando o arquivo database para que as requisições acessem o banco de dados
const db = require('../database/database.js')

// 1️⃣ GET - Listar todas as tarefas
// Exportando getAllTasks
exports.getAllTasks = (req,res) => {
    db.query('SELECT * FROM tasks',(err, results) => {
        if (err) {
            // Se houver erro, responde com status 500 (Erro do Servidor)
            return res.status(500).json({ error: "Erro ao buscar tarefas" });
        }
        // Se der certo, retorna as tarefas em formato JSON
        res.json(results);
    });
};
//Buscar task pelo id
exports.getTaskById = (req, res) => {
    let id = parseInt(req.params.id); // Pegando o ID da URL
    console.log("Buscando ID:", id); // Log para depuração

    const query = "SELECT * FROM tasks WHERE id = $1"; // Query para buscar a tarefa pelo ID
    const values = [id];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Erro ao buscar tarefa:", err);
            return res.status(500).json({ error: "Erro ao buscar tarefa" });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.json(result.rows[0]); // Retorna a tarefa encontrada
    });
};

// POST	/tasks	Cria uma nova tarefa
exports.postTask = (req, res) => {
    // 1️⃣ Pegamos os dados do corpo da requisição
    const { nome, descricao, status } = req.body;
    // 2️⃣ Verificamos se algum campo está vazio
    if (!nome || !descricao || !status) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }
    // 3️⃣ Definição da query (sem o ID, pois ele é gerado automaticamente)
    const query = "INSERT INTO tasks (nome, descricao, status) VALUES ($1, $2, $3) RETURNING * ";
    const values = [nome, descricao, status];
    // 4️⃣ Executa a query no banco de dados
    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Erro ao inserir tarefa:", err);
            return res.status(500).json({ error: "Erro ao inserir tarefa" });
        }
        // 5️⃣ Retorna a tarefa recém-criada
        return res.status(201).json({
            message: "Tarefa criada com sucesso!",
            task: result.rows[0]
        });
    });
};

exports.putAtualizarteskPeloId = (req, res) =>{
    //peguei o id  da url no parms para atualizar pelo id e inseri o valor em uma varial id
    let id = parseInt(req.params.id);
    //  Pegando os dados enviados no corpo da requisição e adicionando a um objeto
    const {nome,descricao, status} = req.body;
    // Verificamos se algum campo está vazio
    if ( !nome || !descricao || !status){
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }
    const query ="UPDATE tasks SET nome = $1, descricao = $2, status = $3 WHERE id = $4";
    const values = [nome, descricao, status, id];
}
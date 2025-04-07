const express = require("express");
const port = 3000;
const sequelize = require('./database');  // Importa a configuração do Sequelize
const Items = require('./models/moodels.js'); // Importa o modelo
// Use a rota só depois de pronta para não dar erro
const router  = require("./routes/route.js");

const app = express();
app.use(express.json());
app.use(router);

const syncDatabase = async () => {
    try {
        // Usando o 'await' para esperar a sincronização da base de dados
        await sequelize.sync({ force: false });
        console.log('Tabelas criadas no banco de dados!');
    } catch (error) {
        console.error('Erro ao criar as tabelas:', error);
    }
};

// Chama a função para sincronizar o banco de dados
syncDatabase();

app.listen(port, () => { // iniciando o servidor
    console.log("Servidor express rodando!");
});

// node --watch server.js

const express = require('express');
const sequelize = require('./database.js');
const Batalhas = require('./models/batalha.js');
const Herois = require('./models/heroi.js');
const Viloes = require('./models/vilao.js');
const router = require('./routes/routes.js');

const app = express();
app.use(express.json());
app.use(router);

const syncDatabase = async () => {
    try {
        // Sincroniza o banco de dados antes de iniciar o servidor
        await sequelize.sync({ force: false }); // Altere para `true` se for para limpar as tabelas
        console.log('Tabelas criadas no banco de dados!');
    } catch (error) {
        console.error('Erro ao criar as tabelas:', error);
    }
}

// Chama a função para sincronizar o banco de dados
syncDatabase().then(() => {
    // Inicia o servidor somente após a sincronização das tabelas
    app.listen(3000, () => {
        console.log("Servidor express rodando na porta 3000!");
    });
});



// node --watch server.js

//jwt node          para restirngir acesso ao banco de dados
// npm install jsonwebtoken bcryptjs
// jsonwebtoken → Para criar e validar tokens
// bcryptjs → Para hashear e comparar senhas

//{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW9fdGVzdGUiLCJpYXQiOjE3NDM1NTUwMjgsImV4cCI6MTc0MzU1ODYyOH0.KRA-vKa42nHmWrsYOXhubwfhkHu9uqDOsNZil0X1a94"

const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('postgresql://postgres.gspnsfrnjfobqcuqyvqk:charmander1234@aws-0-sa-east-1.pooler.supabase.com:5432/postgres')

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado com sucesso ao Banco de dados');
        // Sincroniza os modelos com o banco
        console.log('Tabelas criadas no banco de dados!');
    } catch (error) {
        console.error('Erro ao conectar ou sincronizar o banco', error);
    }
}

connectDatabase();

module.exports = sequelize;

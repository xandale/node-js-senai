const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres.kntvbsolyjmlgfcgbglq:cebolinha1234@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')

const connectDatabase = async () => {
try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
    } catch (error) {
    console.error('Erro ao conectar', error)
    }
}
connectDatabase();
module.exports = sequelize
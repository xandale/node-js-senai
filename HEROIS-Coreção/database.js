// Importar pacote da ORM Sequelize
import { Sequelize } from 'sequelize'

const database = new Sequelize('COLE A SUA CONEXAO AQUI')

try {
    // Testar a conexão com o banco de dados
    await database.authenticate()
    console.log('Conectado com sucesso')
} catch(erro) {
    console.log('Erro na conexão')
}

export { database }
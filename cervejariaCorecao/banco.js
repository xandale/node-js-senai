// IMPORTAR O PACOTE PG PARA FAZER CONEXAO COM BANCO POSTGRE
import pg from 'pg'

// CRIAR A CONEXAO
const conexao = new pg.Client('COLE A SUA CONEXAO DO BANCO DE DADOS AQUI')

// METODO PARA INICIAR A CONEXÃO (PODE SER QUE DE ERRO, POR ISSO O IF/ELSE)
conexao.connect((erro) => {
    if (erro) {
        console.log('Erro na conexao')
    } else {
        console.log('Conectado com suceso')
    }
})
// EXPORTAR A CONEXAO PARA USAR NO CONTROLLER
export { conexao }
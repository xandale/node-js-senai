const pg = require('pg')
const database = new pg.Client('postgresql://postgres.kntvbsolyjmlgfcgbglq:[cebolinha1234]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')

database.connect((erro) => {
    if (erro) {
        return console.log('Erro ao conectar no banco', erro)
    }

    return console.log('Conectado ao banco!')
})

module.exports = database
const http = require('http')

const listaPartidas = [
    { id: 1, partida: 'Gremio x Inter' },
    { id: 2, partida: 'Flamengo x Vasco' },
    { id: 3, partida: 'Inter x Avai' },
    { id: 4, partida: 'Flamengo x Gremio' },
    { id: 5, partida: 'Vasco x Inter' },
    { id: 6, partida: 'Gremio x Flamengo' },
    { id: 7, partida: 'Gremio x Avai' },
]

// Estrutura para definir o que faremos com as requisições que o servidor vai receber dos clientes
const estruturaDoServidor = function(req, res){
    // Remover / da url e transformar para letras minusculas
    const urlAcessada = req.url.replace('/', '').toLowerCase()
    // Tentar encontrar partidas com a url acessada
    const partidasEncontradas = listaPartidas.filter(elemento => elemento.partida.toLowerCase().includes(urlAcessada))
    // Analisar a url que o usuario quer acessar
    switch(true){
        // Resposta para /partidas
        case urlAcessada === 'partidas':
            res.writeHead(200)
            // Retornar a lista em formato de string
            res.end(JSON.stringify(listaPartidas))
            break
        // Caso existam partidas encontradas (pelo length do array)
        case partidasEncontradas.length > 0:
            res.writeHead(200)
            res.end(JSON.stringify(partidasEncontradas))
            break
        default:
            res.writeHead(404) // código de nada encontrado (not found)
            res.end('Nenhuma partida localizada')
    }   
}

// Usar o pacote http pelo metodo createServer
const servidor = http.createServer(estruturaDoServidor)
// Informar a porta e host do servidor
servidor.listen(3000, 'localhost', () => console.log('Servidor rodando'))
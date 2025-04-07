const http = require('http');
const host = 'localhost';
const port = 3000;

// // 1° Escutando as requisições
// const requestListener = function (req,res){
//         res.writeHead(200);
//         res.end('Meu primeiro servidor!');
// };

// 2° Criando o servidor


const requestListener = function (req,res) {
    // Definindo o tipo de dados como Json
    res.setHeader('Content-Type', 'application/json')

    // Tratando as possíveis requisições dos clientes
    switch (req.url){

        case '/livros':
            res.writeHead(200);
            res.end(JSON.stringify({ livros: []}))
            break;

        case '/autores':
            res.writeHead(200);
            res.end(JSON.stringify({ autores: []}))
            break;

        default:
            res.writeHead(404);
            res.end('Nada encontrado');
    }
};
const server = http.createServer(requestListener);

// 3° Iniciando o servidor
server.listen(port, host, () => {
    console.log(`Server disponível!`);
})
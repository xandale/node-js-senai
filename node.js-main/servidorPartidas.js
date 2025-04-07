// Importa o módulo 'http' para criar um servidor HTTP
const http = require("http");

// Define o endereço do host onde o servidor vai rodar
const host = "localhost";

// Define a porta em que o servidor vai escutar as requisições
const port = 3000;

// Um array de objetos que representa as partidas
const partidas = [
  { id: 1, partida: 'Grêmio x Inter' }, 
  { id: 2, partida: 'Flamengo x Vasco' }, 
  { id: 3, partida: 'Inter x Avaí' }, 
  { id: 4, partida: 'Flamengo x Grêmio' }, 
  { id: 5, partida: 'Real Madrid x Grêmio' },
  { id: 6, partida: 'Barcelona x Inter' },
];

// Função que vai tratar as requisições recebidas pelo servidor
const requestListener = function (req, res) {
  // Define o cabeçalho da resposta, informando que o conteúdo será em JSON
  res.setHeader('Content-Type', 'application/json');

  // Verifica se a URL da requisição é exatamente "/partidas"
  if (req.url === '/partidas') {
    // Se for, retorna um código de resposta 200 (OK) e envia todas as partidas em formato JSON
    res.writeHead(200);
    res.end(JSON.stringify({ partidas }));
    return;
  }

  // Se a URL for "/partidas/{time}", extrai o nome do time da URL
  const regex = /^\/partidas\/(.+)$/; // Regex para capturar o nome do time após "/partidas/"
  const match = req.url.match(regex);

  if (match) {
    const time = decodeURIComponent(match[1]);

    // Filtra as partidas que contêm o nome do time, ignorando maiúsculas/minúsculas
    const partidasFiltradas = partidas.filter(jogo => jogo.partida.toLowerCase().includes(time.toLowerCase()));

    // Se encontrar partidas para o time, retorna elas no formato JSON com código 200 (OK)
    if (partidasFiltradas.length > 0) {
      res.writeHead(200);
      res.end(JSON.stringify({ partidas: partidasFiltradas }));
    } else {
      // Se não encontrar partidas, retorna um erro 404 (não encontrado)
      res.writeHead(404);
      res.end(JSON.stringify({ message: `Nenhuma partida encontrada para o time: ${time}` }));
    }
    return;
  }

  // Caso a URL não seja encontrada (nem "/partidas" nem "/partidas/{time}"), retorna erro 404
  res.writeHead(404);
  res.end(JSON.stringify({ message: "URL não encontrada" }));
};

// Cria o servidor HTTP, usando a função 'requestListener' para tratar as requisições
const server = http.createServer(requestListener);

// Faz o servidor escutar na porta e host definidos
server.listen(port, host, () => {
  // Quando o servidor estiver rodando, exibe uma mensagem no console
  console.log(`Server running at http://${host}:${port}`);
});
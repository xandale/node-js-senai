const jwt = require("jsonwebtoken"); // Importa a biblioteca JSON Web Token (JWT), que será usada para criar e verificar tokens de autenticação

// Definição da chave secreta usada para assinar os tokens
// Essa chave é essencial para garantir a segurança da autenticação
// O ideal é armazená-la em uma variável de ambiente para evitar exposição no código
const segredo = "minha_chave_secreta"; 

// Middleware de autenticação - Função que será usada para proteger rotas
module.exports = (req, res, next) => {
    // Captura o token do cabeçalho Authorization
    // Os tokens JWT geralmente são enviados no formato 'Bearer TOKEN_AQUI'
    // O split(" ")[1] serve para extrair apenas o token, removendo a palavra "Bearer"
    const token = req.headers.authorization?.split(" ")[1];

    // Se não houver token na requisição, retorna erro de não autorizado (401)
    if (!token) {
        return res.status(401).json({ error: "Token necessário!" });
    }

    try {
        // Verifica se o token é válido usando a chave secreta
        // Se for válido, ele decodifica os dados do usuário contidos no token
        const decoded = jwt.verify(token, segredo);
        
        // Adiciona os dados do usuário ao objeto req (requisição), permitindo que as próximas funções tenham acesso a essas informações
        req.user = decoded;
        
        // Chama a próxima função da cadeia de middleware ou rota
        next();
    } catch (error) {
        // Se o token for inválido ou estiver expirado, retorna erro de não autorizado (401)
        res.status(401).json({ error: "Token inválido!" });
    }
};
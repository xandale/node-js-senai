const database = require('../database');
// (A.E)
exports.getByName = (req, res) => {
    const { nome } = req.params;
    console.log(nome);
    const query = "SELECT * FROM cervejaria WHERE LOWER(nome) LIKE LOWER($1)";
    const values = [`%${nome}%`];
    database.query(query, values)
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).send({ mensagem: "Cervejarias encontradas!", cervejarias: resultado.rows });
            } else {
                res.status(404).send({ mensagem: "Nenhuma cervejaria encontrada!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};
 
// (B)
exports.getByNacionalidade = (req, res) => {
    const { nacionalidade } = req.params;
    console.log(nacionalidade)
    database.query("SELECT * FROM cervejaria WHERE nacionalidade = $1", [nacionalidade])
        .then((resultado) => {
            res.status(200).send({ mensagem: "Cervejaria encontrada!", cervejaria: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};  
// (C)
exports.getByABV = (req, res) => {
    database.query("SELECT * FROM cervejaria ORDER BY abv DESC")
        .then((resultado) => {
            res.status(200).send({ mensagem: "Cervejaria encontrada!", cervejaria: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};  
// (D)
exports.getByTipo = (req, res) => {
    const { tipo } = req.params;
    console.log(tipo)
    database.query("SELECT * FROM cervejaria WHERE tipo = $1", [tipo])
        .then((resultado) => {
            res.status(200).send({ mensagem: "Cervejaria encontrada!", cervejaria: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};  

 //http://localhost:3000/cerveja/nome/pat

// Desenvolva 5 endpoints (GET) que atendam às seguintes necessidades da cervejaria TainhaBeer:
// OK A. Buscar os dados da cerveja pelo nome;
// OK B. Buscar as cervejas pela nacionalidade;
// Ok C. Ordenar as cervejas pelo maior ABV;
// OK D. Buscar cervejas pelo tipo;
// E. Buscar cervejas pelo nome parcial(ex: “Co" deve retornar Corona e Coruja);
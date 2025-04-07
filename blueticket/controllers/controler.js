
// exports.post = (req, res, next) => {
//     eventos.push(req.body);
//     res.status(200).json({ message: "Evento adicionado!" });
// };

// exports.get = (req, res, next) => {
//     res.status(200).send(eventos);
// };

// exports.getById = (req, res, next) => {
//     let id = parseInt(req.params.id);
//     const festas = eventos.find(e => e.id === id);

//     if (festas) {
//         res.json({
//             nome: festas.nome,
//             local: festas.local,
//             descricao: festas.descricao,
//             preco: festas.preco,
//             foto: festas.foto
//         })
//     } else {
//         res.json("não encontrado")
//     }
// }


const database = require('../database');

exports.post = (req, res, next) => {
    const query = "INSERT INTO eventos(id, nome, local, descricao, preco, foto) VALUES ($1, $2, $3, $4, $5, $6);";
    const values = [req.body.id, req.body.nome, req.body.local, req.body.descricao, req.body.preco, req.body.foto];

    database.query(query, values)
        .then((resultado) => {
            res.status(200).json({ message: "Evento adicionado!", dados: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

exports.get = (req, res, next) => {
    database.query("SELECT * FROM eventos")
        .then((resultado) => {
            res.status(200).send({ mensagem: "Eventos encontrados!", eventos: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

exports.getById = (req, res, next) => {
    let id = parseInt(req.params.id);
    console.log("Buscando ID:", id); // Log para depuração

    const query = "SELECT * FROM eventos WHERE id = $1"; 
    const values = [id];

    database.query(query, values)
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).json({ mensagem: "Evento encontrado!", evento: resultado.rows[0] });
            } else {
                res.status(404).json({ mensagem: "Evento não encontrado!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

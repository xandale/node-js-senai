const Herois = require('../models/heroi.js')// Importa o modelo 
const Viloes = require('../models/vilao.js')// Importa o modelo
const Batalhas = require('../models/batalha.js')// Importa o modelo
const jwt = require("jsonwebtoken");  // Importando JWT
// Heroi (id, nome, poder, vitorias, derrotas)

// Função de login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios!' });
    }

    // Aqui você deve buscar o usuário no banco de dados (usando Sequelize ou outro ORM)
    // Exemplo fictício de busca de usuário (substitua por uma consulta real)
    const usuario = { id: 1, nome: username };  // Usuário fictício (substitua pela lógica real)

    // Gerando o token JWT
    const token = jwt.sign(usuario, process.env.JWT_SECRET || "minha_chave_secreta", { expiresIn: '1h' });

    res.status(200).json({ token });
};

// cadastrar heroi

exports.cadastrarHeroi = async(req,res) => {
    console.log('cadastrando heroi')
    const{nome, pontos_de_poder, vitorias, derrotas} = req.body;
    if(!nome || !pontos_de_poder || vitorias === undefined || derrotas === undefined){
        return res.status(400).json({ error: 'Dados incompletos' });
    }
    try {
        const novoHeroi = await Herois.create({nome, pontos_de_poder, vitorias, derrotas});
        res.status(201).json(novoHeroi);
    } catch(error) {
        console.error('Erro ao criar item:', error);
        res.status(500).json({ error: 'Erro ao criar o item' });
    }
};

exports.cadastrarVilao = async(req,res) => {
    console.log('cadastrando vilao')
    const{nome, pontos_de_poder, vitorias, derrotas} = req.body;
    if(!nome || !pontos_de_poder || vitorias === undefined || derrotas === undefined){
        return res.status(400).json({ error: 'Dados incompletos' });
    }
    try {
        const novoVilao = await Viloes.create({nome, pontos_de_poder, vitorias, derrotas});
        res.status(201).json(novoVilao);
    } catch(error) {
        console.error('Erro ao criar item:', error);
        res.status(500).json({ error: 'Erro ao criar o item' });
    }
};

exports.listar = async (req, res) => {
    const { parametro } = req.params;
    try {
        let lista;
        if (parametro === 'heroi') {
            lista = await Herois.findAll();
        } else if (parametro === 'vilao') {
            lista = await Viloes.findAll();
        } else {
            return res.status(400).json({ error: 'Parâmetro inválido. Use "heroi" ou "vilao".' });
        }
        res.status(200).json(lista);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens', message: error.message });
    }
};
// deletar um heroi 
exports.deletarHeroi = async (req,res) => {
    try{
        const {id} = req.params;
        await Herois.destroy({where: {id}});
        res.status(200).json({message:"Heroi excluido com sucesso"})
    }
    catch (error) {
        res.status(500).json({error: 'Erro ao deletar item', message: error.message })
    }
}
// deletar um vilao 
exports.deletarVilao = async (req,res) => {
    try{
        const {id} = req.params;
        await Viloes.destroy({where: {id}});
        res.status(200).json({message:"Vilão excluido com sucesso"})
    }
    catch (error) {
        res.status(500).json({error: 'Erro ao deletar item', message: error.message })
    }
}

// apagar geral

exports.resetarTabelas = async (req, res) => {
    try {
        // Truncar a tabela de batalhas primeiro, se existir, devido a restrições de chave estrangeira
        // await Batalhas.truncate({ cascade: true }); // Descomente se houver uma tabela de batalhas
        // Truncar as tabelas de heróis e vilões
        await Herois.truncate({ cascade: true, restartIdentity: true });
        await Viloes.truncate({ cascade: true, restartIdentity: true });
        res.status(200).json({ mensagem: 'Tabelas de heróis e vilões foram resetadas.' });
    } catch (erro) {
        console.error('Erro ao resetar as tabelas:', erro);
        res.status(500).json({ erro: 'Erro ao resetar as tabelas', detalhes: erro.message });
    }
};

// batalhar 
// controllers/batalhaController.js

exports.batalhar = async (req, res) => {
    try {
      const { idHeroi, idVilao } = req.body;
  
      // Validação dos IDs fornecidos
      if (!idHeroi || !idVilao) {
        return res.status(400).json({ error: 'IDs do herói e do vilão são necessários.' });
      }
  
      // Busca dos personagens no banco de dados
      const heroi = await Herois.findByPk(idHeroi);
      const vilao = await Viloes.findByPk(idVilao);
  
      // Verificação da existência dos personagens
      if (!heroi) {
        return res.status(404).json({ error: 'Herói não encontrado.' });
      }
      if (!vilao) {
        return res.status(404).json({ error: 'Vilão não encontrado.' });
      }
  
      // Determinação do vencedor
      // const resultado = CONDICAO ? VERDADEIRO : FALSO
      const vencedor = heroi.pontos_de_poder > vilao.pontos_de_poder ? 'heroi' : 'vilao';


  
      // Atualização das estatísticas de vitórias e derrotas
      if (vencedor === 'heroi') {
        heroi.vitorias += 1;
        vilao.derrotas += 1;
      } else {
        vilao.vitorias += 1;
        heroi.derrotas += 1;
      }
  
      // Salvamento das alterações no banco de dados
      // await heroi.update(heroi, { where: { id: heroi.id }})
      await heroi.save();
      await vilao.save();
  
      // Registro da batalha no banco de dados
      await Batalhas.create({
        id_heroi: heroi.id,
        id_vilao: vilao.id,
        nome_vencedor: vencedor === 'heroi' ? heroi.nome : vilao.nome,
      });
  
      // Resposta com o resultado da batalha
      res.status(200).json({
        mensagem: `${vencedor === 'heroi' ? 'Herói' : 'Vilão'} venceu a batalha!`,
        heroi, 
        vilao
        // heroi: {
        //   nome: heroi.nome,
        //   pontos_de_poder: heroi.pontos_de_poder,
        //   vitorias: heroi.vitorias,
        //   derrotas: heroi.derrotas,
        // },
        // vilao: {
        //   nome: vilao.nome,
        //   pontos_de_poder: vilao.pontos_de_poder,
        //   vitorias: vilao.vitorias,
        //   derrotas: vilao.derrotas,
        // },
      });
    } catch (error) {
      console.error('Erro ao processar a batalha:', error);
      res.status(500).json({ error: 'Erro interno do servidor.', detalhes: error.message });
    }
  };

  exports.todasBatalhas = async (req, res) => {
    try {
           const lista = await Batalhas.findAll();
           res.status(200).json(lista);
        } 
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar batalhas', message: error.message });
    }
};
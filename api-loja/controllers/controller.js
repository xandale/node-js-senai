const Items = require('../models/moodels.js'); // Importa o modelo 'Items'

// Endpoint para adicionar um novo item
exports.cadastrasItem = async (req, res) => {
    const { nome, descricao, preco } = req.body; // Dados do corpo da requisição
    if (!nome || !descricao || preco === undefined) {
        return res.status(400).json({ error: 'Dados incompletos' }); // Se faltar algum dado
    }
    try {
        const newItem = await Items.create({ nome, descricao, preco }); // Cria o novo item
        res.status(201).json(newItem); // Retorna o item criado
    } catch (error) {
        console.error('Erro ao criar item:', error);
        res.status(500).json({ error: 'Erro ao criar o item' });
    }
};

// Endpoint para buscar todos os itens
exports.listarItems = async (req, res) => {
    try {
        const items = await Items.findAll(); // Busca todos os itens no banco
        res.status(200).json(items); // Retorna os itens encontrados
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens', message: error.message });
    }
};

// Endpoint para buscar um item pelo ID
exports.listarItemPeloId = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Items.findByPk(id); // Busca o item pelo ID
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" }); // Retorna erro 404 se não encontrar
        }
        res.status(200).json(item); // Retorna o item encontrado
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar item', message: error.message });
    }
};

// Endpoint para atualizar um item existente
exports.AtualizaItem = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    try {
        const atualizaItem = await Items.update( { nome, descricao, preco }, { where: { id } });
        if (atualizaItem === 0) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        const encontraItem = await Items.findByPk(id); // Busca o item atualizado
        res.status(200).json(encontraItem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar item', message: error.message });
    }
};


// Endpoint para deletar um item
exports.deletarItem = async (req, res) => {
    try {
        const { id } = req.params;
        await items.destroy({where: {id}}); // Deleta o item
        res.status(200).json({ message: "Item excluído com sucesso"});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar item', message: error.message });
    }
};

// Endpoint para buscar itens pelo nome usando um parâmetro de consulta
exports.listarItemPeloNome = async (req, res) => {
    try {
        const {nome} = req.params
        if (!nome) {
            return res.status(400).json({ error: "O parâmetro de busca é obrigatório" }); // Se nome não for passado
        }

        const items = await Items.findOne({ where: { nome:nome } });

        if (items.length === 0) {
            return res.status(404).json({ message: "Nenhum item encontrado" }); // Se não encontrar itens
        }

        res.status(200).json(items); // Retorna os itens encontrados
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens', message: error.message });
    }
};
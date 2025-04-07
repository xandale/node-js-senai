    const { DataTypes } = require('sequelize');
    const sequelize = require('../database'); 

    const items = sequelize.define('items',{//items nome da tabela
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,  // Define 'id' como chave primária
            autoIncrement: true, // Auto incrementa o valor do 'id'
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,  // Não pode ser nulo
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,  // Não pode ser nulo
        }
    },{
            freezeTableName: true, // Isso desabilita a pluralização
            timestamps: false // Desativa a criação das colunas createdAt e updatedAt  
    });

    module.exports = items;
// 2- Vilao (id, nome, poder, vitorias, derrotas)
const { DataTypes } = require("sequelize")
const sequelize = require("../database");

const Viloes = sequelize.define('Viloes',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    pontos_de_poder:{
        type: DataTypes.INTEGER,
    },
    vitorias:{
        type:DataTypes.INTEGER,
    },
    derrotas:{
        type:DataTypes.INTEGER,
    }
},{
    freezeTableName: true, // Isso desabilita a pluralização
    timestamps: false
});

module.exports = Viloes;
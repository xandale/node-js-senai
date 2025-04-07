import { database } from "../database.js";
import { DataTypes } from "sequelize";

// Model para indicar a estrutura da tabela Herois do banco de dados
const Heroi = database.define('Heroi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    pontosDePoder: {
        type: DataTypes.FLOAT
    },
}, {
    freezeTableName: true, // Evita que o nome da tabela Heroi fique como Herois
    tableName: 'ListaHerois',
    // timestamps: false // Impedir a criação das colunas de data createdAt e updatedAt
})

export { Heroi }
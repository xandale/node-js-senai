  // 3- Batalha (id_vilao, id_heroi, nome_vence

  const { DataTypes } = require("sequelize");
  const sequelize = require("../database");

  const Batalhas = sequelize.define("Batalhas", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_vilao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Viloes", // Nome da tabela de vilões
        key: "id",
      },
    },
    id_heroi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Herois", // Nome da tabela de heróis
        key: "id",
      },
    },
    nome_vencedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true, // Mantém o nome da tabela sem pluralização
    timestamps: false, // Remove os campos createdAt e updatedAt
  });

  module.exports = Batalhas;

const db = require("../database")
const { DataTypes } = require("sequelize")

const Psicologos = db.define("Psicologos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apresentacao: {
        type: DataTypes.STRING,
    },
    
    
},
{
    tableName: "psicologos",
    timestamps: false
}
)

module.exports = Psicologos

    

const {DataTypes} = require('sequelize')

module.exports = (instance) => {

    return instance.define('car',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        marque: {
            type: DataTypes.STRING
        },
        modele: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        annee: {
            type: DataTypes.STRING
        },
        carburant: {
            type: DataTypes.STRING
        }
    })
}
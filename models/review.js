const {DataTypes} = require('sequelize')

module.exports = (instance) => {

    return instance.define('review',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        idRental: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentaire: {
            type: DataTypes.STRING
        },
        dateEcriture: {
            type: DataTypes.DATEONLY
        }
    })
}
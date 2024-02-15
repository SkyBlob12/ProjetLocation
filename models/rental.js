const {DataTypes} = require('sequelize')

module.exports = (instance) => {

    return instance.define('rental',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCar: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateDebut: {
            type: DataTypes.DATEONLY
        },
        dateFin: {
            type: DataTypes.DATEONLY
        },
        prix: {
            type: DataTypes.INTEGER
        }
    })
}
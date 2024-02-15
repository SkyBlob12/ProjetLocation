const {DataTypes} = require('sequelize')

module.exports = (instance) => {

    return instance.define('user',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }
    })
}
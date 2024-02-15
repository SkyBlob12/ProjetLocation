const { Sequelize } = require('sequelize')
const dbConfig = require('../db.config')

// Uncomment this block to use Mysql, don't forget to adapt db.config.js
/*const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.hostname,
        port: dbConfig.port,
        dialect: "mysql"
})*/

// Uncomment this block to use Sqlite, don't forget to adapt db.config.js
const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
})

// instance = une instance de connexion à votre base via Sequelize
// instance contiendra donc la connexion et l'ensemble des modèles

// 1 seul module.exports mais plusieurs exports, équivalence:
// exports.instance = instance
// exports.users = require('users')(instance)

module.exports = {
    instance,
    users: require('./users')(instance),
    cars: require('./books')(instance),
    rentals: require('./rental')(instance),
    reviews: require('./reviews')(instance)
}

// Define associations between models

// (Optional)
//instance.models.user.hasOne(instance.models.review)
//instance.models.book.hasOne(instance.models.review)

instance.models.reviews.belongsTo(instance.models.users)
instance.models.reviews.belongsTo(instance.models.rentals)

instance.models.rentals.belongsTo(instance.models.users)
instance.models.rentals.belongsTo(instance.models.cars)

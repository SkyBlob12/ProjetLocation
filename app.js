const express = require('express')
const app = express()
const OpenApiValidator = require('express-openapi-validator');

//Pour dire à express qu'on utilise du json
app.use(express.json())

// Require external router
const carRouter = require('./routers/car')
const userRouter = require('./routers/user')
const reviewRouter = require('./routers/review')
const rentalRouter = require('./routers/rental')

// For all routes starting by /users, use the external router
app.use('/car', carRouter)
app.use('/user', userRouter)
app.use('/review', reviewRouter)
app.use('/rental', rentalRouter)

//OpenApi
app.use(
    OpenApiValidator.middleware({
        apiSpec : './open-api.yaml'
    })
)

module.exports = app
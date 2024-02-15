const app = require('./app')
const db = require('./models/index')
const port = 8000

db.instance.sync({force: true}).then(async () =>{
    console.log('Database connected')

    app.listen(port, () => {
        console.log("Server running on port", port)
    })
}).catch((e) =>{
    console.error(e)
})

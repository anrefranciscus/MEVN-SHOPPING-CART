const express = require('express')

const app = express()
const path = require('path')
const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(express.urlencoded( {extended: true }))

app.use('/img', express.static(path.join(__dirname, './public/img')))

const db = require('./app/models')
db.mongoose.set("strictQuery", false);
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log("Database connected!")
}).catch((err) => {
    console.log("Cannot Connect Database", err)
    process.exit()
})

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to mevn store'
    })
})

require('./app/routes/product.route')(app)
require('./app/routes/order.route')(app)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
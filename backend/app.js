const express = require('express')

const app = express()

const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(express.urlencoded( {extended: true }))


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to mevn store'
    })
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
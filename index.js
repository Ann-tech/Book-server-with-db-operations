const express = require('express')
const app = express()
const PORT = 3000
const db = require('./db')

const bookRouter = require('./routes/book')

db.connectToMongoDB()

app.use(express.json())
app.use('/books', bookRouter)

app.get('/', (req, res) => {
    res.status(200).send("Welcome, visit the book route to access our books")
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
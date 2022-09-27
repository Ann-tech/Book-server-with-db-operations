const express = require('express')
const books = require('../models/books')

const bookModel = require('../models/books')

const bookRouter = express.Router()

bookRouter.get('/', (req, res) => {
    bookModel.find()
        .then(books => res.status(200).json(books))
        .catch(err => res.status(404).send("An error has ocurred"))      
})

bookRouter.get('/:id', (req, res) => {
    let id = req.params.id
    bookModel.findById(id)
        .then(books => res.status(200).json(books))
        .catch(err => res.status(404).send(err))      
})

bookRouter.post('/', (req, res) => {
    let books = req.body
    books.lastUpdateAt = new Date()
    bookModel.create(books)
        .then(books => res.status(201).json(books))
        .catch(err => res.status(500).send(err))
})

bookRouter.put('/:id', (req, res) => {
    let id = req.params.id
    let books = req.body
    books.lastUpdateAt = new Date()
    bookModel.findByIdAndUpdate(id, books, {new: true})
        .then(books => res.status(201).json(books))
        .catch(err => res.status(500).send(err))
})

bookRouter.delete('/:id', (req, res) => {
    let id = req.params.id
    bookModel.findByIdAndDelete(id)
        .then(books => res.status(200).json(books))
        .catch(err => res.status(404).send(err))
})

module.exports = bookRouter

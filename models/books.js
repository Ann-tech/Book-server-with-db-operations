const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        max: [new Date().getFullYear(), `Year should be below or equal to ${new Date().getFullYear()}`],
        required: true
    },

    isbn: {
        type: String,
        unique: [true, "ISBN must be unique"],
        required: true
    },

    price: {
        type: Number,
        min: [0, "Price should be greater than 0"],
        required: true
    },

    shortDescription: {
        type: String,
        maxLength: [500, "Description shouldn't exceed 500 characters"],
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    lastUpdateAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)
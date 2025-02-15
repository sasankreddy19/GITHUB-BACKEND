const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    title: String,
    author: String,
    reviews: [{ user: String, review: String }]
});

module.exports = mongoose.model('Book', BookSchema);

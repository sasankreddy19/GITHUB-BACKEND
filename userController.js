const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBookByISBN = async (req, res) => {
    try {
        const book = await Book.findOne({ isbn: req.params.isbn });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBooksByAuthor = async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.author });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addReview = async (req, res) => {
    try {
        const { review } = req.body;
        const book = await Book.findOne({ isbn: req.params.isbn });

        if (!book) return res.status(404).json({ message: "Book not found" });

        book.reviews.push({ user: req.user.id, review });
        await book.save();

        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

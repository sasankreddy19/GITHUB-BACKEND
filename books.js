const express = require('express');
const { getAllBooks, getBookByISBN, getBooksByAuthor, addReview } = require('../controllers/bookController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.post('/:isbn/review', auth, addReview);

module.exports = router;

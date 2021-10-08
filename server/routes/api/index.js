const router = require('express').Router();
const bookRoutes = require('./book');

router.use('/books', bookRoutes);

module.exports = router;

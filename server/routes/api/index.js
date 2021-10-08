const router = require('express').Router();
const bookRoutes = require('./book');

router.use('/book', bookRoutes);

module.exports = router;

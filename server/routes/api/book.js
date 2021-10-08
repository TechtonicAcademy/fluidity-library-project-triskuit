
const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/')
    .get(bookController.findAll)
    .post(bookController.create);

router.route('/search')
    .get(bookController.search);

router.route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.delete);

module.exports = router;
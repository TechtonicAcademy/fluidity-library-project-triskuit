const { Op } = require('sequelize');
const { Book, Author } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Book.findAll({
      include: [Author],
      where: req.query, // necessary?
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },

  search: (req, res) => {
    const { query } = req.query;
    Book.findAll({
      include: [Author],
      where: {
        [Op.or]: [
          { title: { [Op.substring]: query } },
          { '$Author.first_name$': { [Op.substring]: query } },
          { '$Author.last_name$': { [Op.substring]: query } },
        ],
      },
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },

  findById: (req, res) => {
    Book.findByPk(req.params.id, {
      include: [Author],
    })
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },

  create: (req, res) => {
    const authorData = ({ first_name, last_name } = req.body.Author);
    Author.findOrCreate({
      where: authorData,
    })
      .then((author) => {
        const bookData = {
          ...req.body,
          AuthorId: author[0].dataValues.id,
        };
        Book.create(bookData)
          .then((post) => res.json(post))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    Book.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => {
        Author.update(req.body.Author, {
          where: { id: req.body.AuthorId },
        }).catch((err) => res.json(err));
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  delete: (req, res) => {
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};

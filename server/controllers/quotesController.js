const db = require('../models');


module.exports = {

  findAll: function(req, res) {
    console.log('req.params', req.params)
    db.Quotes.find({ username: req.params.username})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(404).json(err));
  },

  findById: function(req, res) {
    db.Quotes.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(404).json(err));
  },

  create: function(req, res) {
    console.log('--- In Quotes Controller ---');
    console.log(req.body, 'Save Quote');
    db.Quotes.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(404).json(err));
  },

  remove: function(req, res) {
    db.Quotes.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(404).json(err));
  }
};
const db = require("../models");

module.exports = {
    
    findAll: function(req, res) {
        console.log("req.params", req.params)
        db.Faves
        .find({ username: req.params.username})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

  findById: function(req, res) {
        db.Faves
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

  create: function(req, res) {
        console.log("--- Inside Faves Controller ---");
        console.log(req.body, "Quote is saved");
        db.Faves
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

  update: function(req, res) {
        db.Faves
        .findOneAndUpdate({ _id: req.params.id }, { $set: {selected: true}}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

  remove: function(req, res) {
        db.Faves
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    }
};
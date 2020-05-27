const db = require ('../models')

module.exports = {

    findAll: function (req, res) {
        console.log(req.params.username)
        db.Goal.find({ username: req.params.username})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

    findById: function (req, res) {
        db.Goal.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

    create: function (req, res) {
        db.Goal.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    },

    update: function (req, res) {
        db.Goal.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res,json(dbModel))
        .catch(err => res.status(400).json(err));
    },

    remove: function(req, res) {
        db.Goal.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
    }
};
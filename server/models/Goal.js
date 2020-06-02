const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    username: {type: String}
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
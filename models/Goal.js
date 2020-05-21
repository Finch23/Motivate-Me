const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    goalName: {
        type: String,
        trim: true,
        required: 'Please enter a goal name'
    },

    goalDesc: {
        type: String,
        trim: true,
        required: 'Please enter a Goal description'
    },

    goalType: {
        type: String,
        unique: true,
        required: 'Please enter a goal type'
    },

    goalDate: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal; 
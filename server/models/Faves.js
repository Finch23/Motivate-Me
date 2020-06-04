const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favesSchema = new Schema({

    username: {type: String},

    selected: { type: Boolean, default: false },

    type: "object",

    properties: [{
        content: String,
        id: String,
        language_code: String,
        url: {
            type: String,
            format: "uri"
        },
        originator: {
            type: String,
            properties: {
                id: String,
                name: String,
                url: {
                    type: String,
                    format: "uri"
                }
            }
        },
        tags: {
            type: String,
            items: {
                type: String
            }
        }
    }],
});

const Faves = mongoose.model('Faves', favesSchema);

module.exports = Faves;
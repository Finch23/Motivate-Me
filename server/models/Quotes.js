const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
    quotestitle: { 
        type: String 
    },
    quotesauthor: { 
        type: String 
    },
    quotesurl: { 
        type: String 
    },
    quotesmedia: { 
        type: String 
    },
    quotescategory: { 
        type: String 
    }
});

const Quotes = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;

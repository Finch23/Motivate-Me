const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quotetitle: { 
        type: String 
    },
    quoteauthor: { 
        type: String 
    },
    quoteurl: { 
        type: String 
    },
    quotemedia: { 
        type: String 
    },
    quotecategory: { 
        type: String 
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;

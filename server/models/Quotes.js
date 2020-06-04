const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema({

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

const Quotes = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const quotesSchema = new Schema({
//     quotestitle: { 
//         type: String 
//     },
//     quotesauthor: { 
//         type: String 
//     },
//     quotesurl: { 
//         type: String 
//     },
//     quotesmedia: { 
//         type: String 
//     },
//     quotescategory: { 
//         type: String 
//     }
// });

// const Quotes = mongoose.model('Quotes', quotesSchema);

// module.exports = Quotes;
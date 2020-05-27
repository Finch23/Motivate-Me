module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define('Quote', {
        quotetitle: {
            type: Sequelize.STRING
        },
        quoteauthor: {
            type: Sequelize.STRING
        },
        quoteurl: {
            type: Sequelize.STRING,
            validate: {
                isUrl: true
            }
        },
        quotemedia: {
            type: Sequelize.STRING,
        },
        quotecategory: {
            type: Sequelize.STRING
        }
    })
    return Quote;
}
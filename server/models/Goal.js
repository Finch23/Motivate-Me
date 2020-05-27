module.exports = (sequelize, Sequelize) => {

    const Goal = sequelize.define("Goal", {

        goaltype: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                notNull: true,
                len: [2]
            }
        },

        goalname: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                notNull: true,
                len: [2] 
            }
        },

        goaldescription: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                notNull: true,
                len: [2]
            }
        },

        goaldate: {
            type: Sequelize.STRING
        }
        
    })

    return Goal;
}
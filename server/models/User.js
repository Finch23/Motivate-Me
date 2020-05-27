module.exports = (sequelize, Sequelize) => {
  
  const User = sequelize.define("User", {

    firstname: {
      type: Sequelize.TEXT,
      validate: {
        notNull: true,
        notEmpty: true 
      }
    },

    lastname: {
      type: Sequelize.TEXT,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [6,20]
      }

    }
  })
  // User.associate = (models) => {models.User.belongsToMany(models.Goal, {through: models.});};

  return User;
}

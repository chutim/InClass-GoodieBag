const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://fyf.tac-cdn.net/images/products/large/FYF-854.jpg?auto=webp&quality=6"
  }
});

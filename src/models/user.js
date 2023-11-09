const { DataTypes } = require('sequelize');

// User Model
module.exports = (sequelize) => sequelize.define('User', {
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isPositive(value) {
        if (value < 0) {
          throw new Error('Balance must be positive.');
        }
      }
    }
  }
});
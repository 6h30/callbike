const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
  // Define model attributes
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  driverId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // Other booking fields
});

module.exports = Booking;

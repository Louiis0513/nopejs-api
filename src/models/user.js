// models/user.js
const { Sequelize, DataTypes } = require('sequelize');

// Cambia la configuración de la base de datos aquí
const sequelize = new Sequelize('mydatabase', 'admin', 'passyourpasswordword', {
  host: 'localhost',
  dialect: 'mariadb'
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;


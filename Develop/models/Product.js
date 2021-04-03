// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    //this is going to create the name of the product
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //this is going to create the price of the product using a decimal type
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
      // will only allow decimal characters
      validate: {
        isDecimal: true,
      },
    },
    //this is going to create the amount of the product that is available
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // will only allow numeric characters
      validate: {
        isNumeric: true,
      },
    },
    //Will reference the pk in category
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

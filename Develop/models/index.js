// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany( Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
//There should be many tags on a product but we can only reach tags through the product ID model
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
//Each tag should have many products but we can onlyr each products through the product ID model
Tag.belongsToMany( Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

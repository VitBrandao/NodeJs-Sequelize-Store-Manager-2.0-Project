const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.SalesProducts.belongsTo(models.Products,
        { foreignKey: 'productId', as: 'product' });
      
      models.SalesProducts.belongsTo(models.Sales,
        { foreignKey: 'saleId', as: 'sale' });
    }
  }
  SalesProducts.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SalesProducts',
  });
  return SalesProducts;
};

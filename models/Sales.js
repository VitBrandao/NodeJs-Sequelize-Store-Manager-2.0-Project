const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sales.hasOne(models.SalesProducts,
        { foreignKey: 'saleId', as: 'productSales' });
    }
  }
  Sales.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Sales',
    timestamps: false,
  });
  return Sales;
};

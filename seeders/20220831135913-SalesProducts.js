module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('SalesProducts', [
      {
        saleId: 1,
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        productId: 3,
        quantity: 15,
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('SalesProducts', null, {});
  },
};

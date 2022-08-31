module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Martelo de Thor',
        quantity: 10,
      },
      {
        name: 'Traje de encolhimento',
        quantity: 20,
      },
      {
        name: 'Escudo do Capitão América',
        quantity: 30,
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Sales', [
      {
        date: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        date: new Date('2011-08-01T19:58:00.000Z'),
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Sales', null, {});
  },
};

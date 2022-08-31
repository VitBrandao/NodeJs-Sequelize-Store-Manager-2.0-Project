module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    }, { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  },
};

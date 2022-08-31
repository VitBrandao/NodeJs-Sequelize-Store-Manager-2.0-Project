const { Products } = require('../models');

const getAll = async () => {
    const allProducts = await Products.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']],
    });
    return allProducts;
};

module.exports = {
    getAll,
};

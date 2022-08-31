const { Products } = require('../models');

const getAll = async () => {
    const allProducts = await Products.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['id', 'ASC']],
    });
    return allProducts;
};

const getById = async (id) => {
    const productById = await Products.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        // eslint-disable-next-line object-shorthand
        where: { id: id },
    });

    if (productById === null) return { message: 'Product Not Found' };

    return productById;
};

module.exports = {
    getAll,
    getById,
};

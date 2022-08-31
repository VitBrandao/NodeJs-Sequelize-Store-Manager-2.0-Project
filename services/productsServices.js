const { Products } = require('../models');
const { validateName, validateQuantity } = require('../middlewares/validateProduct');

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

const create = async (body) => {
    const { name, quantity } = body;

    const nameVerifications = validateName(name);
    if (nameVerifications.message) return nameVerifications;

    const qtyVerifications = validateQuantity(quantity);
    if (qtyVerifications.message) return qtyVerifications;

    await Products.create(body);
    const findNewProduct = await Products.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        // eslint-disable-next-line object-shorthand
        where: { name: name },
    });

    return findNewProduct;
};

module.exports = {
    getAll,
    getById,
    create,
};

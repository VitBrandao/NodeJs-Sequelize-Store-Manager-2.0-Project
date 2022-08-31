const { Products } = require('../models');
const { validateName, validateQuantity } = require('../middlewares/validateProduct');

const getAll = async () => {
    const allProducts = await Products.findAll({
        order: [['id', 'ASC']],
    });

    return allProducts;
};

const getById = async (id) => {
    const paramsId = id;
    const productById = await Products.findOne({
        where: { id: paramsId },
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

    const newProduct = await Products.create(body);

    const findNewProduct = await Products.findOne({
        where: { id: newProduct.dataValues.id },
    });

    return findNewProduct;
};

const update = async (id, body) => {
    const paramsId = id;

    const findProduct = await Products.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: { id: paramsId },
    });

    if (!findProduct) return { message: 'Product Not Found' };

    await Products.update(body, {
        where: { id: paramsId },
    });

    const updatedProduct = await Products.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: { id: paramsId },
    });

    return updatedProduct;
};

const deleteById = async (id) => {
    const paramsId = id;

    const findProduct = await Products.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: { id: paramsId },
    });

    if (!findProduct) return { message: 'Product Not Found' };

    await Products.destroy({
        where: { id: paramsId },
    });

    return 'Product Successfully Deleted';
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
};

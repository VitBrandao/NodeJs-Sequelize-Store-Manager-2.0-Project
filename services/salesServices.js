const { Sales } = require('../models');

const getAll = async () => {
    const allSales = await Sales.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return allSales;
};

const getById = async (id) => {
    const saleById = await Sales.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        // eslint-disable-next-line object-shorthand
        where: { id: id },
    });

    if (saleById === null) return { message: 'Sale Not Found' };

    return saleById;
};

module.exports = {
    getAll,
    getById,
};

const { Sales } = require('../models');

const getAll = async () => {
    const allSales = await Sales.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return allSales;
};

module.exports = {
    getAll,
};

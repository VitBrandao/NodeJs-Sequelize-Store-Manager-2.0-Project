const { SalesProducts } = require('../models');

const getAll = async () => {
    const allSales = await SalesProducts.findAll({        
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        // include: [
        //     {
        //       model: Sales,
        //       as: 'sale',
        //       attributes: ['date'],
        //     },
        // ],
    });

    return allSales;
};

const getById = async (id) => {
    const saleById = await SalesProducts.findOne({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        // eslint-disable-next-line object-shorthand
        where: { saleId: id },

    });

    if (saleById === null) return { message: 'Sale Not Found' };

    return saleById;
};

module.exports = {
    getAll,
    getById,
};

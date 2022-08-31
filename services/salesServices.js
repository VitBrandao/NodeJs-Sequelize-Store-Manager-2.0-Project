const { 
    validateProductId, 
    validateQuantity, 
    mountCreatedObject } = require('../middlewares/validateSales');
const { SalesProducts, Sales } = require('../models');

const getAll = async () => {
    const allSales = await SalesProducts.findAll({        
        attributes: { exclude: ['id'] },
    });

    return allSales;
};

const getById = async (id) => {
    const paramsId = id;
    const saleById = await SalesProducts.findAll({
        attributes: { exclude: ['id'] },
        where: { saleId: paramsId },
    });

    const saleNull = saleById === null;
    const saleUndef = saleById === undefined;
    const saleIsEmpty = saleById.length === 0;

    if (saleNull || saleUndef || saleIsEmpty) return { message: 'Sale Not Found' };

    return saleById;
};

const create = async (body) => {
    const { quantity: qty, productId: prodId } = body;

    const prodIdVerifications = validateProductId(prodId);
    if (prodIdVerifications.message) return prodIdVerifications;

    const qtyVerifications = validateQuantity(qty);
    if (qtyVerifications.message) return qtyVerifications;

    const createSale = await Sales.create({
        date: Date.now(),
    });

    const newSaleId = createSale.dataValues.id;

    const createSaleProduct = await SalesProducts.create({
        saleId: newSaleId,
        productId: prodId, 
        quantity: qty, 
    }, { fields: ['saleId', 'productId', 'quantity'] });

    const createdObject = mountCreatedObject(newSaleId, createSaleProduct.dataValues);
    return createdObject;
};

module.exports = {
    getAll,
    getById,
    create,
};

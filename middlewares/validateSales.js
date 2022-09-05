const validateQuantity = (qty) => {
    if (qty === null || qty === undefined) {
        const message = {
            message: { message: '"quantity" is required' },
            status: 400,
        };
        return message;
    }

    if (qty <= 0) {
        const message = {
            message: { message: '"quantity" must be greater than or equal to 1' },
            status: 422,
        };
        return message;
    }

    return 'Quantity is Valid';
};

const validateProductId = (id) => {
    if (id === null || id === undefined) {
        const message = {
            message: { message: '"productId" is required' },
            status: 400,
        };
        return message;
    }

    return 'ProductId is Valid';
};

const mountCreatedObject = (saleId, saleProdObj) => {
    const createdObject = {
        id: saleId,
        itemsSold: [
            {
                productId: saleProdObj.productId,
                quantity: saleProdObj.quantity,
            },
        ],
    };

    return createdObject;
};

const mountUpdatedObject = (saleId, saleProdObj) => {
    const createdObject = {
        id: saleId,
        itemUpdated: [
            {
                productId: saleProdObj.productId,
                quantity: saleProdObj.quantity,
            },
        ],
    };

    return createdObject;
};

module.exports = {
    validateQuantity,
    validateProductId,
    mountCreatedObject,
    mountUpdatedObject,
};

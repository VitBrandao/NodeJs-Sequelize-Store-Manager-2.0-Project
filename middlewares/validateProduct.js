const validateName = (name) => {
    if (!name) {
        const message = { 
            message: { message: '"name" is required' },
            status: 400, 
        };
        return message;
    }

    if (name.length < 5) {
        const message = {
            message: { message: '"name" length must be at least 5 characters long' },
            status: 422,   
        };
        return message;
    }

    return 'Name is Valid';
};

const validateQuantity = (qty) => {
    if (!qty) {
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

module.exports = {
    validateName,
    validateQuantity,
};

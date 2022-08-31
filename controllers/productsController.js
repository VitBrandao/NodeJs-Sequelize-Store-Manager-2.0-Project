const express = require('express');
const productServices = require('../services/productsServices'); 

const router = express.Router();

const errorMessage = 'Algo deu errado';

router.get('/', async (_req, res) => {
    try {
        const allProducts = await productServices.getAll();
        return res.status(200).json(allProducts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const productById = await productServices.getById(id);

        if (productById.message) {
            return res.status(404).json(productById);
        }

        return res.status(200).json(productById);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.post('/', async (req, res) => {
    try {
        const createProduct = await productServices.create(req.body);

        if (createProduct.message) {
            return res.status(createProduct.status).json(createProduct.message);
        }

        return res.status(201).json(createProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = await productServices.update(id, req.body);

        if (updateProduct.message) {
            return res.status(404).json(updateProduct);
        }

        return res.status(200).json(updateProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await productServices.deleteById(id);

        if (deleteProduct.message) {
            return res.status(404).json(deleteProduct);
        }

        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

module.exports = router;
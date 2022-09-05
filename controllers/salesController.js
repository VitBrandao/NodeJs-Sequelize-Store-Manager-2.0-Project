const express = require('express');
const salesServices = require('../services/salesServices');

const router = express.Router();

const errorMessage = 'Algo deu errado';

router.get('/', async (_req, res) => {
    try {
        const allSales = await salesServices.getAll();
        return res.status(200).json(allSales);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allSales = await salesServices.getById(id);

        if (allSales.message) {
            return res.status(404).json(allSales);
        }
        
        return res.status(200).json(allSales);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.post('/', async (req, res) => {
    try {
        const createSale = await salesServices.create(req.body);

        if (createSale.message) {
            return res.status(createSale.status).json(createSale.message);
        }

        return res.status(201).json(createSale);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateSale = await salesServices.update(req.params, req.body);

        if (updateSale.message) {
            return res.status(updateSale.status).json(updateSale.message);
        }

        return res.status(201).json(updateSale);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteSale = await salesServices.deleteSale(req.params);

        if (deleteSale.message) {
            return res.status(deleteSale.status).json(deleteSale.message);
        }

        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: errorMessage });
    }
});

module.exports = router;
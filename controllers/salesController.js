const express = require('express');
const salesServices = require('../services/salesServices');

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const allSales = await salesServices.getAll();
        return res.status(200).json(allSales);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo deu errado' });
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
        return res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = router;
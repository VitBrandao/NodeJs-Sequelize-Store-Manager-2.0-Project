const express = require('express');
const salesServices = require('../services/salesServices');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allSales = await salesServices.getAll();
        return res.status(200).json(allSales);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = router;
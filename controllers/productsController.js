const express = require('express');
const productServices = require('../services/productsServices'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allProducts = await productServices.getAll();
        return res.status(200).json(allProducts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = router;
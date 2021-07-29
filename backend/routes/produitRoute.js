const express = require ('express')
const router = express.Router()
const produit = require('../controller/produit')





router.get('/get', produit.getProduit)
router.post('/add', produit.addProduit)
router.delete('/:id/delete', produit.deleteProduit)
router.put('/:id/update', produit.updateProduit)

module.exports = router
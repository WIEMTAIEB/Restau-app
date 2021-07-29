
const express = require ('express')
const router = express.Router()
const command = require('../controller/command')



router.get('/get', command.getCommand)
router.post('/add', command.addCommand)
router.delete('/:id/delete', command.deleteCommand)
router.put('/:id/update', command.updateCommand)




module.exports = router
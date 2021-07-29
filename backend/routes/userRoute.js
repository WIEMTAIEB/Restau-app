const express = require ('express')
//const { addUser } = require('../controller/user')
const router = express.Router()
const user = require('../controller/user')




router.get('/get', user.getUser)
router.post('/add', user.addUser)
router.delete('/:id/delete', user.deleteUser)
router.put('/:id/update', user.updateUser)






module.exports = router
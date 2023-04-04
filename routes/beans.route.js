const { Router } = require('express')
const router = Router()

const { orderDb } = require('../db')
const { getAllCtrl, postOrderCtrl } = require('../controllers/beans.controller')


//SE ALLA KAFFESORTER
router.get('/', getAllCtrl)


//LÄGG BESTÄLLNING
router.post('/order', postOrderCtrl)


//SE ORDERSTATUS
router.get('/order/status/:userid', )


module.exports = { beansRouter: router }
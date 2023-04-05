const { Router } = require('express')
const router = Router()

const { orderDb } = require('../db')
const { getAllCtrl, postOrderCtrl, activeOrdersCtrl } = require('../controllers/beans.controller')

const { verifyProducts } = require('../middleware/verifyProducts.middleware')

//SE ALLA KAFFESORTER
router.get('/', getAllCtrl)


//LÄGG BESTÄLLNING
router.post('/order', verifyProducts, postOrderCtrl)

router.get('/order/status/:userId', activeOrdersCtrl)

//SE ORDERSTATUS
router.get('/order/status/:userid', )


module.exports = { beansRouter: router }
const { Router } = require('express')
const router = Router()

const { getAllBeansCtrl, postOrderCtrl, getOrderStatusCtrl} = require('../controllers/beans.controller')
const { verifyProducts } = require('../middleware/verifyProducts.middleware')

//SE ALLA KAFFESORTER
router.get('/', getAllBeansCtrl)

//LÄGG BESTÄLLNING
router.post('/order', verifyProducts, postOrderCtrl)

//SE ORDERSTATUS
router.get('/order/status/:userId', getOrderStatusCtrl)

module.exports = { beansRouter: router }

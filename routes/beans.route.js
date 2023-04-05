const { Router } = require('express')
const router = Router()

const { getAllBeansCtrl, postOrderCtrl, getOrderStatusCtrl } = require('../controllers/beans.controller')

const { validate } = require('../middleware/validate.middleware')
const { verifyProducts } = require('../middleware/verifyProducts.middleware')

const { orderSchema } = require('../schemas/order.schema')

//SE ALLA KAFFESORTER
router.get('/', getAllBeansCtrl)

//LÄGG BESTÄLLNING
router.post('/order', validate(orderSchema), verifyProducts, postOrderCtrl)

//SE ORDERSTATUS
router.get('/order/status/:userId', getOrderStatusCtrl)

module.exports = { beansRouter: router }

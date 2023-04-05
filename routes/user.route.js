const { Router } = require('express')
const router = Router()
const { newUser, getHistoryCtrl, loginCtrl } = require('../controllers/user.controller')

router.post('/signup', newUser)
router.post('/login', loginCtrl)
router.get('/history/:userId', getHistoryCtrl)

module.exports = { userRouter: router }

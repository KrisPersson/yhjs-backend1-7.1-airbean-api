const { Router } = require('express')
const router = Router()
const { newUser, getHistoryCtrl } = require('../controllers/user.controller')

router.post('/signup', newUser)


// router.post('/login', )


router.get('/history/:userId', getHistoryCtrl)



module.exports = { userRouter: router }

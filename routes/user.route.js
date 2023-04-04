const { Router } = require('express')
const router = Router()
const { newUser, get } = require('../controllers/user.controller')

router.post('/signup', newUser)


// router.post('/login', )


 router.get('/history/:userId', get)



module.exports = { userRouter: router }

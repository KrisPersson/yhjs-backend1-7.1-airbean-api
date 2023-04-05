const { Router } = require('express')
const router = Router()
const { newUser, getHistoryCtrl, loginCtrl } = require('../controllers/user.controller')

const { validate } = require('../middleware/validate.middleware')

const { signupSchema } = require('../schemas/signup.schema')
const { loginSchema } = require('../schemas/login.schema')

router.post('/signup', validate(signupSchema), newUser)
router.post('/login', validate(loginSchema), loginCtrl)
router.get('/history/:userId', getHistoryCtrl)

module.exports = { userRouter: router }

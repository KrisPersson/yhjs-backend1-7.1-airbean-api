const { Router } = require('express')
const router = Router()
const { newUser, getHistoryCtrl, loginCtrl } = require('../controllers/user.controller')

const { validate } = require('../middleware/validate.middleware')

const { signupSchema } = require('../schemas/signup.schema')
const { loginSchema } = require('../schemas/login.schema')

// SIGNUP
router.post('/signup', validate(signupSchema), newUser)
// LOGIN
router.post('/login', validate(loginSchema), loginCtrl)
// GET HISTORY
router.get('/history/:userId', getHistoryCtrl)

module.exports = { userRouter: router }

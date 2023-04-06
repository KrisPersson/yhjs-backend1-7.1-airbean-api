const bcrypt = require('bcrypt');
const moment = require('moment')
const { userDb, orderDb } = require('../db.js')
const { v4: uuidv4 } = require('uuid');

async function signup(email, password, username) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const randomId = uuidv4()

    const userNameExist = await userDb.findOne({ username })
    const emailExist = await userDb.findOne({ email })

    if (userNameExist) {
        throw new Error('Username already exist.')
    } else if (emailExist) {
        throw new Error('Email already exist.')
    } else {
        const signupObj = {
            email: email,
            userId: randomId,
            password: hashedPassword,
            username: username
        }

        await userDb.insert(signupObj)
        return randomId
    }
}

async function login(username, password) {
    const user = await userDb.findOne({ username })
    const passwordMatch = bcrypt.compare(password, user.password)

    if (passwordMatch) {
        return user.userId
    } else {
        throw new Error('Login failed. No matches for this username/password combo.')
    }
}

async function getOrderHistory(userId) {
    const getEta = (deliveryAt) => moment(deliveryAt).diff(moment(), 'm')

    const orders = await orderDb.find({ userId })

    const history = orders
        .map((order) => {
            return {
                order: order.order,
                orderedAt: order.orderedAt,
                delivered: getEta(order.deliveryAt) < 0
            }
        })

    return history
}

module.exports = { signup, getOrderHistory, login }

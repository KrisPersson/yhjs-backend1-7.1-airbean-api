const bcrypt = require('bcrypt');
const { userDb } = require('../db.js')
const { v4: uuidv4 } = require('uuid');




async function signup(email, password, username) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const randomId = uuidv4()

    const signupObj = {
        email: email,
        userid: randomId,
        password: hashedPassword,
        username: username        

    }
    await userDb.insert(signupObj)
    return randomId
}

async function getOrder(userId){
    return await ordersDb.findOne({ userId })
}

module.exports = { signup, getOrder }
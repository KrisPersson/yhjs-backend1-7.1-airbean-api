const { signup, getOrderHistory, login } = require('../model/user.model')

async function newUser(request, response){
    const {email, password, username} = request.body;
    
    try {
        const userId = await signup(email, password, username)

        const result = {
            success: true,
            message: "New user added",
            userId: userId
        }
    
        response.json(result)
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function loginCtrl(request, response) {

    const { username, password } = request.body

    try {
        const userId = await login(username, password)
        response.json({ success: true, userId: userId })
    } catch (error) {
        response.status(401).json({ success: false, message: error.message })
    }

}

async function getHistoryCtrl(request, response){
    const { userId } = request.params
    
    const orders = await getOrderHistory(userId)
    response.json({
        success: true,
        orders: orders
    })
}

module.exports = {newUser, getHistoryCtrl, loginCtrl}

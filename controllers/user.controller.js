const { signup, getOrders } = require('../model/user.model')


async function newUser(request, response){
    const {email, password, username} = request.body;
    
    const userId = await signup(email, password, username)

    const result = {
        success: true,
        message: "New user added",
        UserID: userId
    }
    
    response.json(result)
}



async function getHistoryCtrl(request, response){
    const { userId } = request.params
    
    const orders = await getOrders(userId)
    response.json({
        success: true,
        orders
    })
}

module.exports = {newUser, getHistoryCtrl}

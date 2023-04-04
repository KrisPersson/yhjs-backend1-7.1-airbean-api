const { signup, getOrder } = require('../model/user.model')


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



async function get(request, response){
    const { userId } = request.params
    
    const order = await getOrder(userId)
    response.json({
        success: true,
        order
    })
}

module.exports = {newUser}

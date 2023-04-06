const moment = require('moment')
const beans = require('../assets/menu.json')
const { orderDb, userDb } = require('../db')

function getAllBeans() {
    return beans
}

async function postOrder(order) {
    const userId = order.details.userId
    if (userId) {
        const userExist = await userDb.findOne({ userId })

        if (!userExist) {
            throw new Error('User does not exist')
        }
    }

    const newOrder = {
        userId: order.details.userId,
        order: order.details.order,
        orderedAt: moment().format(), 
        deliveryAt: moment()
            .add(Math.floor((Math.random() * 10) + 1) + 10, 'm')
            .format()
    }

    await orderDb.insert(newOrder)
    return newOrder
}

async function getOrderStatus(userId) {
    const getEta = (deliveryAt) => moment(deliveryAt).diff(moment(), 'm')

    const orders = await orderDb.find({ userId })

    const currentOrder = orders
        .filter((order) => getEta(order.deliveryAt) >= 0)
        .at(-1)
    
    if (currentOrder) {
        return {
            order: currentOrder?.order,
            eta: getEta(currentOrder?.deliveryAt)
        }
    } else {
        throw new Error('No active order')
    }
}

module.exports = { getAllBeans, postOrder, getOrderStatus }

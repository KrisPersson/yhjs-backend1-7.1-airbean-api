const moment = require('moment')
const beans = require('../assets/menu.json')
const { orderDb } = require('../db')

function getAll() {
    return beans
}

async function postOrder(order) {

    const newOrder = {
        userId: order.details.userId || 'guest',
        order: order.details.order,
        orderedAt: moment().format(), 
        deliveryAt: moment()
            .add(Math.floor((Math.random() * 10) + 1) + 10, 'm')
            .format()
    }

    await orderDb.insert(newOrder)
    return newOrder
}

async function getActiveOrders(userId) {
    const getEta = (deliveryAt) => moment(deliveryAt).diff(moment(), 'm')

    const orders = await orderDb.find({ userId })

    return orders
        .filter((order) => getEta(order.deliveryAt) >= 0)
        .map((order) => {
            return {
                items: order.order,
                eta: getEta(order.deliveryAt)
            }
        })
}

module.exports = { getAll, postOrder, getActiveOrders }

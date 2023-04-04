const moment = require('moment')
const beans = require('../assets/menu.json')
const { orderDb } = require('../db')

function getAll() {
    return beans
}

async function postOrder(order) {

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

module.exports = { getAll, postOrder }

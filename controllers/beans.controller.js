const { getAll, postOrder } = require('../model/beans.model')

function getAllCtrl(request, response) {
  response.json({ success: true, ...getAll })
}

async function postOrderCtrl(request, response) {
    const order = request.body
    const newOrder = await postOrder(order)
    response.json({ success: true, order: newOrder })
}

module.exports = { getAllCtrl, postOrderCtrl }

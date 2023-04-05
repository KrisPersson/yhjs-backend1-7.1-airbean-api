const { getAll, postOrder, getActiveOrders } = require('../model/beans.model')

function getAllCtrl(request, response) {
  response.json({ success: true, ...getAll })
}

async function postOrderCtrl(request, response) {
    const order = request.body
    const newOrder = await postOrder(order)
    response.json({ success: true, order: newOrder })
}

async function activeOrdersCtrl(request, response) {
  const { userId } = request.params;
  const activeOrders = await getActiveOrders(userId);

  response.json({ userId, activeOrders })
}

module.exports = { getAllCtrl, postOrderCtrl, activeOrdersCtrl }

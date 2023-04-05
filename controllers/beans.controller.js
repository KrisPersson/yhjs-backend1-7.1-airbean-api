const { getAllBeans, postOrder, getOrderStatus } = require('../model/beans.model')

function getAllBeansCtrl(request, response) {
  response.json({ success: true, ...getAllBeans() })
}

async function postOrderCtrl(request, response) {
    const order = request.body
    
    try {
      const newOrder = await postOrder(order)
      response.json({ success: true, order: newOrder })
    } catch (error) {
      response.status(401).json({ success: false, message: error.message})
    }
}

async function getOrderStatusCtrl(request, response) {
  const { userId } = request.params;

  try {
    const activeOrder = await getOrderStatus(userId);
    response.json({ success: true, userId, activeOrder})
  } catch (error) {
    response.json({ success: false, message: error.message})
  }
}

module.exports = { getAllBeansCtrl, postOrderCtrl, getOrderStatusCtrl }


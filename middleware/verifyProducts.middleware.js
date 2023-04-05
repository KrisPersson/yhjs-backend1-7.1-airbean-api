const { menu } = require('../assets/menu.json')

function isProduct(item) {
  return menu.some((product) => product.title === item.name)
}

function validatePrice(item) {
  const price = menu.find((product) => product.title === item.name)?.price
  return item.price === price
}

function verifyProducts(request, response, next) {
  const { order } = request.body.details

  const validProducts = order.every((item) => isProduct(item))
  const correctPrices = order.every((item) => validatePrice(item))

  if (!validProducts) {
    response.json({ success: true, message: 'Product does not exist' })
  } else if (!correctPrices) {
    response.json({ success: true, message: 'Invalid price for product' })
  } else {
    next()
  }
}

module.exports = { verifyProducts }

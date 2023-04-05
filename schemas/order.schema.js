const joi = require('joi')

const schema = joi.object({
  details: joi.object({
    userId: joi.string().allow('').required(),
    order: joi.array().items(
      joi.object({
        name: joi.string().required(),
        price: joi.number().integer().min(0).required()
      }).required()
    )
  }).required()
})

module.exports = { orderSchema: schema }

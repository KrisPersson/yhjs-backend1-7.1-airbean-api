const joi = require('joi')

const schema = joi.object({
  username: joi.string().alphanum().required(),
  password: joi.string().alphanum().required()
})

module.exports = { loginSchema: schema }

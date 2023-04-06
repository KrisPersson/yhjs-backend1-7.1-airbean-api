const joi = require('joi')

const schema = joi.object({
  username: joi.string().alphanum().required(),
  password: joi.string().required()
})

module.exports = { loginSchema: schema }

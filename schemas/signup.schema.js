const joi = require('joi')

const schema = joi.object({
  username: joi.string().alphanum().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().required()
})

module.exports = { signupSchema: schema }

function validate(schema) {
  return (request, response, next) => {
    const validation = schema.validate(request.body)

    if (validation?.error) {
      response.status(400).json({
        success: false, error: validation.error.message
      })
    } else {
      next()
    }
  }
}

module.exports = { validate }

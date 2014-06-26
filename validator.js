module.exports = function validateIfPropertyEquals(property, value, validator) {

  if (!property) {
    throw new Error('No property to check provided')
  }

  if (!value) {
    throw new Error('No value to check provided')
  }

  if (!validator || typeof validator !== 'function') {
    throw new Error('No validator function provided')
  }

  return function (key, msg, object, callback) {
    if (object[property] === value) {
      return validator(key, msg, object, callback)
    }

    return callback(null, undefined)
  }
}

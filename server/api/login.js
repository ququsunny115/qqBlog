const jwt = require('jsonwebtoken')
const secret = require('../../client/config').jwt
const db = require('../db/db.js')
const sha1 = require('sha1')

// 生成token
const createToken = (id, name) => {
  return jwt.sign({
    id: id,
    name: name
  }, secret.cert, { expiresIn: '7d' })
}

var fn_login = async (ctx, next) => {
  try {
    const doc = await db.User.findOne({name:ctx.request.body.name});
    const salt = doc.salt
    if (doc.password === sha1(ctx.request.body.password + salt)) {
      const token = createToken(doc._id, doc.name)
      ctx.status = 200
      ctx.body = {
        id: doc._id,
        name: doc.name,
        token: token
      }
    } else {
      ctx.status = 401
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  'POST /login': fn_login
}
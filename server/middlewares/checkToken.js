// 基于jsonwebtoken的验证方式 （此文件未使用） 
// 在app.js中使用koa-jwt中间件方式解密
const jwt = require('jsonwebtoken')
const secret = require('../../client/config').jwt

module.exports = function() {
  return async (ctx, next) => {
    try {
      const authorization = ctx.headers.authorization
      if (authorization) {
        let token = ctx.headers.authorization.split(' ')[1]
        await jwt.verify(token, secret.cert, function (err) {
          if (err) {
            console.log(err)
            ctx.status = 401
            ctx.body = {
              code: 401,
              message: '认证失败'
            }
          }
        })
      }
      await next()
    } catch (error) {
      console.log(error)
    }
  }
}

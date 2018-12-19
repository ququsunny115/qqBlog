const Koa = require('koa')
const app = new Koa()
const secret = require('../client/config').jwt
const koajwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')
const middleware = require('./middlewares/middlewares')

// koa验证jsonwebtoken
app.use((ctx, next) => {
  return next().catch((err) => {
      if (err.status === 401) {
          ctx.status = 401
          ctx.body = {
              ok: false,
              msg: err.originalError ? err.originalError.message : err.message
          }
      } else {
          throw err
      }
  })
})

app.use(koajwt({ secret: secret.cert }).unless({
  path: [/^\/login/,/^\/article\/page/]
}))

app.use(bodyParser())

app.use(middleware()) // 等于app.use(router.routes())

app.listen(3000,() => {
  console.log('server is starting at port 3000')
})
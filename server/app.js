const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const middleware = require('./middlewares/middlewares')

// const static = require('koa-static')
// const path = require('path')
// app.use(static(path.join(__dirname,'./mock')))


app.use(bodyParser())

app.use(middleware()) // 等于app.use(router.routes())

app.listen(3000,() => {
  console.log('server is starting at port 3000')
})
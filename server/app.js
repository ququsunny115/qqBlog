const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const path = require('path')

app.use(static(path.join(__dirname,'./mock')))
console.log(path.join(__dirname,'./mock'))

app.listen(3000,() => {
  console.log('server is starting at port 3000')
})
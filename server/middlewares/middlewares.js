// 读取api下每个接口文件，注册每个接口里的url
const fs = require('fs')
const path = require('path')

function addControllers(router, dir) {
  // var files = fs.readdirSync(__dirname + '/' + dir)
  var files = fs.readdirSync(path.resolve(__dirname, '../' + dir))
  var js_files = files.filter(item => {
    return item.endsWith('.js')
  })
  for (var file of js_files) {
    // let mapping = require(__dirname + '/' + dir + '/' + file)
    let mapping = require(path.resolve(__dirname, '../'+ dir +'/' + file))
    addMapping(router, mapping)
  }
}

function addMapping(router, mapping) {
  console.log(mapping)
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      var path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST ')) {
      var path = url.substring(5)
      router.post(path, mapping[url])
    } else if (url.startsWith('PUT ')) {
      var path = url.substring(4)
      router.put(path, mapping[url])
    } else if (url.startsWith('DELETE ')) {
      var path = url.substring(7)
      router.delete(path, mapping[url])
    }
  }
}

module.exports = function(dir) {
  let controllers_dir = dir || 'api',
      router = require('koa-router')();
      addControllers(router, controllers_dir)
      return router.routes()
}
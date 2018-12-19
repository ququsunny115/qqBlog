// const fs = require('fs')

// // 上传单个文件
// var upload_file = async (ctx, next) => {
//   try {
//     const file = ctx.request.files.file
//     const reader = fs.createReadStream(file.path)
//     const ext = file.name.split('.').pop()
//     const upStream = fs.createWriteStream(`../upload/${Math.random().toString()}.${ext}`)
//     await reader.pipe(upStream)
//     ctx.body = '上传成功！'
//   } catch (error) {
//     console.log(error)
//   }
// }
// // 上传多个文件
// var upload_files = async (ctx, next) => {
//   try {
//     const files = ctx.request.files.file
//     for (let file of files) {
//       const reader = fs.createReadStream(file.path)
//       const ext = file.name.split('.').pop()
//       const upStream = fs.createWriteStream(`../upload/${Math.random().toString()}.${ext}`)
//       await reader.pipe(upStream)
//     }
//     ctx.body = '上传成功！'
//   } catch (error) {
//     console.log(error)
//   }
// }

// module.exports = {
//   'POST /uploadFile': upload_file,
//   'POST /uploadFiles': upload_files
// }

const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

const upload = async (ctx, next) => {
  const form = new formidable.IncomingForm({
      encoding: 'utf-8',
      uploadDir: path.resolve(__dirname, '../upload'),
      // multiples: true,
      keepExtensions: true,
      type: 'multipart'

  })
  const result = await new Promise(resolve => {
    form.parse(ctx.req, function(err, fields, files) {
        const { file } = files
        const extname = path.extname(file.name)
        const oldPath = file.path
        const newPath = Date.now() + '' + file.size + extname
        fs.renameSync(oldPath, path.resolve(__dirname, '../upload/' + newPath))
        resolve(newPath)
    })
  })
  ctx.body = result
}

module.exports = {
  'POST /uploadFile': upload
}
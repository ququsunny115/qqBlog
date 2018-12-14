const mongoose = require('mongoose')
const Schama = mongoose.Schema
const sha1 = require('sha1')
const csprng = require('csprng')

const UserSchama = new Schama( // 用户登录数据结构
    {
      name: String,
      password: String,
      salt: String
    },
    { versionKey: false }
  )

const ArticleSchema = new Schama({ // 博客内容数据结构
  title: String,
  content: String,
  pic: String,
  isPublished: Boolean,
  date: Date
},{
  timestamps: true
})

const Models = {
  User: mongoose.model('User', UserSchama),
  Article: mongoose.model('Aticle', ArticleSchema)
}

const init = () => {
  console.log('begin to init')
  Models.User.find({}, (err, doc) => {
    if (err) {
      console.log(err)
      console.log('init failed')
    } else if (!doc.length) {
      const salt = csprng(160, 36)
      // 创建我的登录账户
      new Models['User']({name: 'ququ', password: sha1('a123456' + salt), salt: salt}).save()
    } else {
      console.log('init successed')
    }
  })
}

mongoose.connect('mongodb://127.0.0.1/qq-blog')

const moc = mongoose.connection
moc.on('err', (err) => {
  console.log('connection error')
})
moc.once('open', () => {
  console.log('connected')
  init()
})

module.exports = Models
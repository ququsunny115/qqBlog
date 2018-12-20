const db = require('../db/db.js')

// 发布文章
var publish_article = async (ctx, next) => {
  try {
    const article = {
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      pic: ctx.request.body.pic,
      isPublished: true,
      date: Date()
    }
    await new db.Article(article).save()
    ctx.body = '操作成功！'
  } catch (error) {
    console.log(error)
  }
}

// 分页查询文章
var get_articles_page = async (ctx, next) => {
  try {
    const page = parseInt(ctx.query.start)
    const limit = parseInt(ctx.query.length)
    const skip = page * limit
    const count = db.Article.find({})
    const result = db.Article.find({}).skip(skip).limit(limit).sort({'date':-1}).exec()
    await Promise.all([count, result]).then(res => {
      ctx.body = {
        list: res[1],
        totalRows: res[0].length,
        currentPage: page + 1,
        limit: limit,
        totalPages: Math.ceil(res[0].length / limit)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// 查询谋篇文章
// var query_article = async (ctx, next) => {
//   try {
//     await db.Article.findOne({id: ctx.params.id}, function(err, doc){
//       if (err) {
//         console.log(err)
//       } else {
//         ctx.body = doc
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// 删除某篇文章
var delete_article = async (ctx, next) => {
  try {
    await db.Article.deleteOne({ _id: ctx.params.id }, function(err, doc){
      if (err) {
        console.log(err)
      } else {
        ctx.body = '操作成功！'
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// // 更新文章
// var update_article = async (ctx, next) => {
//   try {
//     await db.Article.update({ id: ctx.params.id }, function(err, doc){
//       if (err) {
//         console.log(err)
//       } else {
//         ctx = '操作成功！'
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

module.exports = {
  'POST /publish/article': publish_article,
  // 'GET /article/:id': query_article,
  'GET /article/page': get_articles_page,
  'DELETE /article/delete/:id': delete_article,
  // 'PUT /article/update/:id': update_article,
}
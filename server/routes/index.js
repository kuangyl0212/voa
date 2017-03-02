var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.body = 'Hello Koa!';
})
module.exports = router;

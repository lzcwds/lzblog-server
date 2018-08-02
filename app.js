/**
 * Created by dy on 2018/7/17.
 *
 */

const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const cors =require('koa-cors');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const session = require('koa-session');
const koaBody = require('koa-body');

const  userRouter =require('./routes/user');

onerror(app);

app.use(json())
//跨域
app.use(cors())
// app.use(async (ctx, next) => {
//     const start = new Date();
// await next();
// const ms = new Date() - start;
// console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// router
app.use(require('./middlewares/response'));
app.use(userRouter.routes(),userRouter.allowedMethods());
// app.use(require('./middlewares/filter'));

app.listen(12580);


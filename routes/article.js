/**
 * Created by dy on 2018/7/17.
 *
 */

const router = require('koa-router')();
const ArticleController = require('../controllers/articleController');


router
    .get('/article/getlist',ArticleController.selectArticle)
    .get('/article/getbyid',ArticleController.getbyid)
module.exports = router;
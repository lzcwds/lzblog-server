/**
 * Created by dy on 2018/7/17.
 *
 */

const router = require('koa-router')();
const ArticleController = require('../controllers/articleController');


router
    .get('/selectarticle',ArticleController.selectArticle)
    .post('/addarticle',ArticleController.addArticle)
module.exports = router;
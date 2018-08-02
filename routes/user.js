/**
 * Created by dy on 2018/7/17.
 *
 */

const router = require('koa-router')();
const UserController = require('../controllers/userController');


router
    .get('/testmodel',UserController.testModel)
    .get('/testsql',UserController.testSql)
    .get('/createuser',UserController.createuser)
module.exports = router;
/**
 * Created by dy on 2018/7/13.
 *
 */

var Sequelize = require('sequelize');
var config = require('../config');


var db = new Sequelize(config.mysql.database,config.mysql.user,config.mysql.password, {
    host: config.mysql.host, // 数据库地址
    dialect: 'mysql', // 指定连接的数据库类型
    pool: config.mysql.pool,
    timezone: '+08:00'
});

// db.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
// });

module.exports = db;
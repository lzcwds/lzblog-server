/**
 * Created by dy on 2018/7/16.
 *
 */
var sequelize  = require('sequelize');
var db = require('../db/db');

var userModel = db.import('./lib/user.js');
var socialModel = db.import('./lib/social.js');

//原生sql查询
var query =async (sql,params)=>{
    var result = await db.query(sql,params);
    return result;
}

// 建立模型之间的关系
userModel.hasMany(socialModel, {as:'info',foreignKey: 'username', sourceKey: 'name'});
socialModel.belongsTo(userModel,{foreignKey: 'username',targetKey:'name'});



module.exports = {
    userModel:userModel,
    socialModel:socialModel,
    query:query
}
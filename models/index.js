/**
 * Created by dy on 2018/7/16.
 *
 */
var sequelize  = require('sequelize');
var db = require('../db/db');

let articleModel = db.import('./lib/article.js');
let tagModel = db.import('./lib/tag.js');
//原生sql查询
var query =async (sql,params)=>{
    var result = await db.query(sql,params);
    return result;
}



// 建立模型之间的关系
articleModel.belongsTo(tagModel,{as:'tag',foreignKey:'tag_id',targetKey:'id'});


// init db
tagModel.sync();
articleModel.sync();


module.exports = {
    articleModel,
    tagModel,
    query:query
}
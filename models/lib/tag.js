/**
 * Created by dy on 2018/8/2.
 *
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article_tag', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        freezeTableName: true,// Model 对应的表名将与model名相同
        timestamps: false,//去除createAt updateAt
    })
}
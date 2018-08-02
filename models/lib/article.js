/**
 * Created by dy on 2018/8/2.
 *
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        tag_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedate:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        freezeTableName: true,// Model 对应的表名将与model名相同
        timestamps: false,//去除createAt updateAt
    })
}
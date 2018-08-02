/**
 * Created by dy on 2018/7/13.
 *
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ege:{
            type:DataTypes.STRING,
            allowNull:true,
            field:'age'
        }
    },{
        freezeTableName: true,// Model 对应的表名将与model名相同
        timestamps: false,//去除createAt updateAt
    })
}
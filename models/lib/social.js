/**
 * Created by dy on 2018/7/16.
 *
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('social', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        association: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        des:{
            type:DataTypes.STRING,
            allowNull:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },{
        freezeTableName: true,// Model 对应的表名将与model名相同
        timestamps: false,//去除createAt updateAt
    })
}

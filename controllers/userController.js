/**
 * Created by dy on 2018/7/17.
 *
 */
const {userModel,socialModel,articleModel,tagModel,query} = require('../models/index')
const {Op} = require('sequelize');

class UserController {
    //测试model
    static async testModel(ctx) {
        // console.log(params.age);
        var data= await articleModel.findAll({
            include:{
                model:tagModel,
                as:'tag'
            }
        });

        ctx.success(data);
    }

    //测试原生
    static async testSql(ctx) {
        await query('select * from user').then(result=>{
            ctx.success(result);
        });
    }

    static async createuser(ctx) {
        var result =await userModel.create({
            name:'vcdf',
            ege:'29'
        },{
            include:{
                model:socialModel,
                as:'info'
            },
            fields:['name','ege']
        });
        ctx.success(result);
    }
    

}

module.exports = UserController;
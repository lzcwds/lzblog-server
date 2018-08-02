/**
 * Created by dy on 2018/7/17.
 *
 */
const {userModel,socialModel,query} = require('../models/index')
const {Op} = require('sequelize');

class UserController {
    //测试model
    static async testModel(ctx) {
        var params = ctx.request.query;
        var age = parseInt(params.age);
        // console.log(params.age);
        var data= await userModel.findAll({
            where:{
                age:{
                    [Op.lt]:age
                }
            },
            include:{
                model:socialModel,
                as:'info'
            }
        });

        var count = await userModel.count({
            where:{
                age:{
                    [Op.lt]:age
                }
            }
        })
        ctx.success({rows:data,count:count});
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
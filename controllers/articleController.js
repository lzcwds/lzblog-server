/**
 * Created by dy on 2018/7/17.
 *
 */
const {articleModel,tagModel,query} = require('../models/index')
const {Op} = require('sequelize');

class ArticleController {
    //测试model
    static async selectArticle(ctx) {
        let params = ctx.request.query;
        // console.log(params.age);
        var data= await articleModel.findAll({
            include:{
                model:tagModel,
                as:'tag'
            }
        });

        ctx.success(data);
    }

    // //测试原生
    // static async testSql(ctx) {
    //     await query('select * from user').then(result=>{
    //         ctx.success(result);
    //     });
    // }
    //
    static async addArticle(ctx) {
        let data = ctx.request.body;
        console.log(data);
        if(!data.author){
            ctx.error(result,'参数错误');
            return;
        }
        try{
            var result =await articleModel.create(data,{
                fields:['title','content','tag_id','author','updateupdate']
            });
            ctx.success(result);
        }catch (e){
            ctx.error(result);
        }


    }
    

}

module.exports = ArticleController;
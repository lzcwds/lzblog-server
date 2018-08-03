/**
 *
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */

module.exports = async (ctx, next) => {
    ctx.error = (data,error) => {
       ctx.status=ctx.status ||400;
       ctx.body = { code: 400, msg:'error', data, error };
    }
    ctx.success = data => {
        if(data.length ==0){
            ctx.body = { code: 2001, msg:'empty data', data };
        }else{
            ctx.body = { code: 2000, msg:'success', data };
        }
    }
    await next()
}
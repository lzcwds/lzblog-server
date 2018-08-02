/**
 *
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */

module.exports = async (ctx, next) => {
    ctx.error = (data,error) => {
       ctx.status= status||400;
       ctx.body = { code: 400, msg:'error', data, error };
    }
    ctx.success = data => {
        ctx.body = { code: 200, msg:'success', data };
    }
    await next()
}
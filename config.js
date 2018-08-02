/**
 * Created by dy on 2018/7/17.
 * 配置文件
 */

var config = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database:'test', // 前面建的user表位于这个数据库中
        port: 3306,
        pool: {
            max: 10, // 连接池中最大连接数量
            min: 0, // 连接池中最小连接数量
            idle: 10000  // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
        }
    }
}
module.exports = config
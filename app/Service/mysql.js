'use strict';

module.exports = app => {
    // 接受请求的参数,查询服务器,返回对应信息
    return class User extends app.Service {
        // 新增 插入数据到数据库
        * add() {
            const data = this.ctx.params.data;
            // 表格名称test,数据库名称在config/config.default.js下已定义
            const result = yield this.app.mysql.insert('test', {
                // 时间优化下
                'date': new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
                'name': data
            });
            if (result.serverStatus === 2) {
                return 'success';
            } else {
                return "fail";
            }
        };

        // 删除 根据name从数据库中删除
        * del() {
            const data = this.ctx.params.data;
            const result = yield this.app.mysql.delete('test', {
                name: data
            });
            console.log('result.affectedRows  ' + result.affectedRows);
            if (result.affectedRows === 1) {
                return 'success'
            } else {
                return false
            }
        };

        //
        * search() {
            const data = this.ctx.params.data;
            // get单条查询，select多条查询和全部，0代表查全部数据
            const result = data === 0 ? yield this.app.mysql.select('test') : yield this.app.mysql.select('test', {
                where: {name: data}, // WHERE 条件
                columns: ['id', 'date', 'name'], // 要查询的表字段
                // orders: [], // 排序方式
                limit: 5,
                offset: 0, // 数据偏移量
            });
            if (result) {
                return result;
            } else {
                return {
                    code: '1001',
                    data: 'false'
                }
            }
        };

        * update() {
            const data = this.ctx.params.data;
            console.log('更新数据' + data);
            const result = yield this.app.mysql.update('test', {
                id: '1',
                'name': data,
            });

            if (result) {
                return 'success';
            } else {
                return {
                    code: '1001',
                    data: 'false'
                }
            }
        };
    }
};
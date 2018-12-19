'use strict';

const Controller = require('egg').Controller;

class EjsController extends Controller {
    async index() {
        // index为view文件夹下需要渲染的页面，后面跟的是后台需要传递给前段的参数
        await this.ctx.render('/ejs/index', {
            name: "egg"
        });
    };

    async test() {
        let name = this.ctx.query.name;
        let id = this.ctx.query.id;
        // let id = this.ctx.params.id;
        let list = [1,2,3];
        await this.ctx.render('/ejs/test',{
            name,
            id,
            list
        })
    };

    async testPost() {
        let name = this.ctx.request.body.name;
        let id = this.ctx.request.body.id;
        let list = [1,2,3];
        await this.ctx.render('/ejs/test',{
            name,
            id,
            list
        })
    };

    async request() {
        let id = await this.ctx.query.id;
        await this.ctx.render('/ejs/request', {
            id: id
        });
    };

}

module.exports = EjsController;

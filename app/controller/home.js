'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }

    async post() {
        this.ctx.body = this.ctx.request.body;
    }

    async httpclient () {
        const res = await this.ctx.curl('https://eggjs.org');
        this.ctx.body = res.data.toString();
    }
}

module.exports = HomeController;

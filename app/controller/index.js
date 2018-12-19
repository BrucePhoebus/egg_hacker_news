'use strict';

/**
 * 自定义controller
 */

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() { // 此处定义为异步，防止阻塞
        this.ctx.body = 'This is index';
    }
}

module.exports = IndexController;
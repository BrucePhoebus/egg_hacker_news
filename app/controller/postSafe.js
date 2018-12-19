'use strict';

const Controller = require('egg').Controller;

class PostsafeController extends Controller {
    async index() {
        await this.ctx.render('/postSafe/postSafe')
    }
    async post(){
        let bodydata = this.ctx.request.body;
        console.log(bodydata)
    }
}

module.exports = PostsafeController;
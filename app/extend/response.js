'use strict';

// 在 app/extend/response.js 中增加一个 isSuccess 属性，判断当前响应状态码是否 200
module.exports = {
    get isSuccess() {
        return this.status === 200;
    },
};
'use strict';

// 在 app/extend/request.js 中增加一个 isChrome 属性，判断是否 Chrome 浏览器发起的请求
const IS_CHROME = Symbol('Request#isChrome');
module.exports = {
    get isChrome() {
        if (!this[IS_CHROME]) {
            const ua = this.get('User-Agent').toLowerCase();
            this[IS_CHROME] = ua.includes('chrome/');
        }
        return this[IS_CHROME];
    },
};
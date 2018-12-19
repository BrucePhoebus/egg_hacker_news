'use strict';

// 在 app/extend/context.js 中增加一个 isXHR 属性，判断是否通过 XMLHttpRequest 发起的请求

module.exports = {
    get isXHR() {
        return this.get('X-Requested-With') === 'XMLHttpRequest';
    },
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get('user-agent'));
    },
};
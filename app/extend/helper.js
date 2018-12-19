'use strict';

const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

module.exports = {
    money(val) {
        const lang = this.ctx.get('Accept-Language');
        if (lang.includes('zh-CN')) {
            return `￥ ${val}`;
        }
        return `$ ${val}`;
    },
};

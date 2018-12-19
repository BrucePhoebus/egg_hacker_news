'use strict';

// 给 app 增加了一个基于 ylru 的缓存功能

const LRU = Symbol('Application#lru');
const LRUCache = require('ylru');

module.exports = {
    get lru() {
        if (!this[LRU]) {
            this[LRU] = new LRUCache(1000);
        }
        return this[LRU];
    },
};
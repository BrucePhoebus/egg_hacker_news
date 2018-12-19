'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/request.test.js', () => {
    let app;
    before(() => {
        app = mock.app();
        return app.ready();
    });

    // 在 app/extend/context.js 中增加一个 isXHR 属性，判断是否通过 XMLHttpRequest 发起的请求
    describe('isXHR()', () => {
        it('should true', () => {
            const ctx = app.mockContext({
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            });
            assert(ctx.isXHR === true);
        });

        it('should false', () => {
            const ctx = app.mockContext({
                headers: {
                    'X-Requested-With': 'SuperAgent',
                },
            });
            assert(ctx.isXHR === false);
        });
    });
});
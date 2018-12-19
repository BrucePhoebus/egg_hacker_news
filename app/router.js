'use strict';

/**
 * @param app
 */

module.exports = app => {
    const {router, controller} = app; // 获取app中的router对象和controller
    router.get('/', controller.home.index); // 自带controller模板的路由（get请求下访问路径为localhost:7001/）controller下的home.js中的index方法
    router.get('/homepage', '/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/ejs', controller.ejs.index);
    router.get('/ejs/test', controller.ejs.test);
    router.get('/ejs/test/:id', controller.ejs.test);
    router.get('/ejs/testPost', controller.ejs.testPost);
    router.get('/ejs/request', controller.ejs.request);
    router.get('/index', controller.index.index); // 自定义controller路由

    // 安全机制csrf
    router.get('/postSafe', controller.postsafe.index);
    router.post('/postSafe', controller.postsafe.post);
};
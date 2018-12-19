'use strict';

module.exports = appInfo => {
    const config = exports = {};


    // 添加 view 配置，渲染模版
    /*config.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    };*/
    config.view = {
        defaultViewEngine: 'ejs',
        // defaultExtension: '.ejs',
        mapping: {
            '.html': 'ejs',
        },
    };

    // mysql配置
    config.mysql = {
        client: {
            // ip地址
            host: 'localhost',
            // 端口
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root',
            // 数据库名
            database: 'egg-mysql'
        },
        app: true,
        agent: false,
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    };

    // add middleware robot
    config.middleware = [
        'robot',
        'printdate',
        'forbidip',
        'auth',
    ];
    // robot's configurations
    config.robot = {
        ua: [
            /curl/i,
            /Baiduspider/i,
        ]
    };

    // Cookie 安全字符串
    config.keys = appInfo.name + '_1537409827938_2257';
    // add your config here
    config.middleware = [];

    return config;
};


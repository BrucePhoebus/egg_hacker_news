'use strict';

module.exports = appInfo => {
    const config = exports = {};
    
    // Cookie 安全字符串
    config.keys = '_1537409827938_2257';

    // 添加 view 配置
    config.view = {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    };
    
	config.middleware = [];
    
    return config;
}

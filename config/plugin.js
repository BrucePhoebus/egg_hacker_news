'use strict';

/*exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};*/
module.exports = {
    ejs: {
        enable: true,
        package: 'egg-view-ejs',
    }
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.security = {
    xframe: {
        enable: false,
    },
};

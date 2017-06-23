'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1493109050482_9648';


    //加载中间件
    config.middleware = ['header'];

    config.security = {
        csrf: {
            enable: false
        }
    };


    config.redis = {
        // Single Redis
        client: {
            host: '182.254.147.116',
            port: '6379',
            password: '9ijn8uhb',
            db: 0
        }
    };


    config.mysql = {
        // Single Database
        client: {
            host: '192.168.7.7',
            port: '3306',
            user: 'test',
            password: 'test',
            database: 'test'
        }
    };

    return config;
};

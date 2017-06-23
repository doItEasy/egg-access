'use strict';

module.exports = appInfo => {
    const config = {};


    config.backServers ={
        "fideCheifServer": "http://inet-dop2.yuanbaopu.com:6070",
        "fideDataGServer": "http://inet-dop2.yuanbaopu.com:6010",
        "fideUserServer": "http://inet-dop2.yuanbaopu.com:6030",
        "ybpServer":    "http://inet-seller_backend.yuanbaopu.com:8086",
        "agentServer":  "http://inet-daili.yuanbaopu.com:8081",
        "dgServer":  "https://dg.yuanbaopu.com",
        "baitiaoServer":  "http://115.236.188.99:9000"
    };


    config.logger = {
        dir: '/data/logs/yuanbaopu_access',
        level: 'INFO',
        consoleLevel: 'INFO'
    };


    return config;
};

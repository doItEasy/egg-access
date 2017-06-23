'use strict';

module.exports = appInfo => {
    const config = {};


    config.backServers ={
        "fideCheifServer": "http://inet-dop2.yuanbaopu.com:6070",
        "fideDataGServer": "http://inet-dop2.yuanbaopu.com:6010",
        "fideUserServer": "http://inet-dop2.yuanbaopu.com:6030",
        "ybpServer":    "http://inet-test-k8s-master.yuanbaopu.com:38001",
        "agentServer":  "http://inet-test-k8s-node.yuanbaopu.com:38003",
        "dgServer":  "https://dgtest.yuanbaopu.com",
        "baitiaoServer":  "http://115.236.188.99:9000"
    };

    config.logger = {
        dir: '/data/logs/yuanbaopu_access',
        level: 'DEBUG',
        consoleLevel: 'DEBUG'
    };


    return config;
};

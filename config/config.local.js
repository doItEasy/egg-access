'use strict';

module.exports = appInfo => {
    const config = {};



    config.backServers ={
        "fideCheifServer": "https://wxapi.yuanbaopu.com/fidechief",
        "fideDataGServer": "https://wxapi.yuanbaopu.com/fidedatag",
        "fideUserServer": "https://wxapi.yuanbaopu.com/fideuser",
        "ybpServer":"https://wxapi.yuanbaopu.com/ybpusertest",
        "agentServer":"https://wxapi.yuanbaopu.com/agenttest",
        "dgServer":  "https://dgtest.yuanbaopu.com",
        "baitiaoServer":  "http://192.168.5.180:9000"
    };

    config.logger = {
        level: 'DEBUG',
        consoleLevel: 'DEBUG'
    };


    return config;
};

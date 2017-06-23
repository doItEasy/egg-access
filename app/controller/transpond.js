'use strict';
const  qs = require("qs");
module.exports = app => {
    class TranspondFideController extends app.Controller {

        async getTranspond() {

            var path = this.ctx.path.split(this.ctx.params.serverName)[1];
            var url =  app.config.backServers[this.ctx.params.serverName]+path;
            var options = {
                method: 'GET',
                dataType: 'json',
                timeout: 100000,
                data:this.ctx.request.query
            };

            this.ctx.logger.info("请求URL:"+url);

            const result = await app.httpclient.request(url, options);
            this.ctx.logger.info("返回数据:"+JSON.stringify(result));

            this.ctx.body = result;

        }

        async postTranspond() {

            var path = this.ctx.path.split(this.ctx.params.serverName)[1];
            var url =  app.config.backServers[this.ctx.params.serverName] + path + "?" + qs.stringify(this.ctx.request.body);
            var options = {
                method: 'POST',
                dataType: 'json',
                timeout: 100000,
                contentType:'json',
                data:this.ctx.request.body
            };

            // var that = this;
            // url = url + "?" + Object.keys(this.ctx.request.body).map(function(k) {
            //     return k + "=" + that.ctx.request.body[k];
            // }).join('&');


            this.ctx.logger.info("请求URL:"+url);
            this.ctx.logger.debug("请求包体"+ JSON.stringify(this.ctx.request.body));

            const result = await app.httpclient.request(url, options);
            this.ctx.logger.debug("返回响应"+ JSON.stringify(result));

            this.ctx.body = result.data;
        }


    }
    return TranspondFideController;
};

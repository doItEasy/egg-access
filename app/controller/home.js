'use strict';
module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            // await app.redis.set('feixmtest', 'hahaha');
            //
            // const post = await app.mysql.get('activity', {id: 1});
            //
            // this.ctx.logger.info(post);
            //
            // this.ctx.body = await app.redis.get('feixmtest');
            this.ctx.body = "hello";

        }
    }
    return HomeController;
};

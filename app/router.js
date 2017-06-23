'use strict';

module.exports = app => {
    const decoder = app.middlewares.decoder();
    const encoder = app.middlewares.encoder();

    app.get('/',encoder,'home.index');
    /**
     * 前置服务GET
     * */
    app.get('/api/:serverName/*', 'transpond.getTranspond');




    /**
     * 前置服务POST
     * */
    app.post('/api/:serverName/*', decoder, 'transpond.postTranspond');


};

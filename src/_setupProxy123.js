
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    //app.use(proxy('/thari1', { target: 'http://localhost:5001/' }));
    app.use('/hypeweb123', proxy({ target: 'http://localhost:7001/hypeweb', changeOrigin: true }));
    app.listen(3000);
    //app.use(proxy('/__', { target: 'http://localhost:5000/' }));
};

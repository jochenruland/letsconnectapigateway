const express = require('express');
const {setupLogging} = require('./logging');
const {setupAuth} = require('./auth');
const {setupRateLimit} = require('./rateLimit');
const {setupCreditCheck} = require('./creditcheck');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 8000;

setupLogging(app);
/* setupCreditCheck(app, ROUTES);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupProxies(app, OPTIONS); */

const proxyTable = {
    '127.0.0.1:8000/api/publishers': 'http://127.0.0.1:5000', // host only
    '127.0.0.1:8000/api/affiliates': 'http://127.0.0.1:5001',
    '127.0.0.1:8000/api/offers': 'http://127.0.0.1:5001'
  };
  
const OPTIONS = {
    target: 'http://127.0.0.1:5000',
    changeOrigin: true,
    router: proxyTable
  };


app.use(createProxyMiddleware(
    OPTIONS));


app.listen(port, '127.0.0.1', () => {
    console.log(`server is listening to http://localhost:${port}`)
})
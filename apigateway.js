const express = require('express');
const {setupLogging} = require('./logging');
const {setupProxies} = require('./proxy');
const {setupAuth} = require('./auth');
const {setupRateLimit} = require('./rateLimit');
const {setupCreditCheck} = require('./creditcheck');
const {ROUTES} = require('./routes');

const app = express();
const port = 8000;

setupLogging(app);
setupCreditCheck(app, ROUTES);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, '127.0.0.1', () => {
    console.log(`server is listening to http://localhost:${port}`)
})
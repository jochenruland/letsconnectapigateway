const express = require('express');
const {setupLogging} = require('./logging');
const {setupProxies} = require('./proxy');
const {setupAuth} = require('./auth');
const {setupRateLimit} = require('./rateLimit');
const {ROUTES} = require('./routes');

const app = express();
const port = 8000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`server is listening to http://localhost:${port}`)
})
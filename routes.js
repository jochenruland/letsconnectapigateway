const ROUTES = [
    {
        url: '/api',
        /*
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        */
        proxy: {
            target: 'http://127.0.0.1:5000/api',
            changeOrigin: false,
            logger: console,
            secure: false,
            pathRewrite: {
                ['^/publishers']: '/publishers',
            } 
        }
        
    },
    {
        url: '/api',
        /*
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        */
        proxy: {
            target: 'http://127.0.0.1:5000/api',
            changeOrigin: false,
            logger: console,
            secure: false,
            pathRewrite: {
                ['^/publishers/:id']: '/publishers/:id',
            } 
        }
    }
]

module.exports = {
    ROUTES
}
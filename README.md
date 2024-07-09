# letsconnectapigateway
api gateway for the letsconnect project


## some information  about configuring routes
url — URL path to match with incoming requests. This can be any path that is supported by Express. This means it can also contain wildcards to match multiple paths.
auth — Boolean representing if a user needs to be authenticated for accessing this endpoint.
creditCheck — Boolean indicating if a credit check needs to be executed for this request.
rateLimit — Configuration for applying rate limiting to the service.
proxy — Proxy configuration containing information about the target to which the request should be redirected

## some information about setting up custom middelware in express -> example "credit check"
We will create a more generic implementation of the credit check example. You can create any type of middleware where you want to do additional checks before redirecting or blocking the requests.

As you may have noticed, we've always made use of an Express middleware in order to combine them in a chain of request evaluation/execution. Express allows us to create a custom middleware and add it to the validation chain. Each middleware is defined as a function:

function(request, response, next) {
    // Add custom code here
}

In the middleware function you have access to the request and response object and to a function called next. During the execution of the middleware, you have several choices:

- End the processing of the request by sending a response to the client through the response object, for example:
    res.status(500).send({error});
- Finish the middleware and continue to the next middleware in the chain. This is where the next() function comes in. It tells Express that your middleware did not encounter any errors and it can continue the evaluation of the request through the next middleware.

The check itself will be a promise like this:

const checkCredit = (request) => {
    return new Promise((resolve, reject) => {
           // Custom code here 
           if (ok) {
              resolve();
           } else {
              reject('No credits');
           } 
    })
}

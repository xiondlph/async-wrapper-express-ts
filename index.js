/**
 * async-wrapper-express-ts
 * Copyright(c) 2019 Shukhrat Ismailov <shukhrat@ismax.ru>
 * MIT Licensed
 *
 *
 * Wrapper for async express route for properly catches thrown exceptions
 *
 * Wraps the express route in a function that passes the `next` method
 * from the route to the promise's catch statement
 * which allows the middleware to catch the exception
 *
 * @param {Function} fn The Express function to wrap
 * @returns {Function} The wrapped function
 * @see {@link https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait}
 *
 * @example
 *
 * ```ts
 * import asyncWrapper from 'asyncWrapper'
 *
 * //...
 *
 * app.get('/foo', asyncWrapper(someAsyncRouteFunction))
 * ```
 */
'use strict';

module.exports = (fn) => {
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    }
};

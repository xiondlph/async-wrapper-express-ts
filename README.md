[![Build Status](https://travis-ci.org/xiondlph/async-wrapper-express-ts.svg?branch=master)](https://travis-ci.org/xiondlph/async-wrapper-express-ts)
[![Coverage Status](https://coveralls.io/repos/github/xiondlph/async-wrapper-express-ts/badge.svg?branch=master)](https://coveralls.io/github/xiondlph/async-wrapper-express-ts?branch=master)
# async-wrapper-express-ts
>A simple function for Typescript sources to wrap async Express route

Wraps the express route in a function that passes the `next` method from the route to the promise's catch statement which allows the middleware to catch the exception.

This code was borrowed from the [StrongLoop blog post](https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait) on handling `async`/`await` routes in express. This npm module allows you to use this solution in the typescript sources.

## Install

```bash
# With npm
npm install --save async-wrapper-express-ts

# With yarn
yarn add async-wrapper-express-ts
```

## Usage
```ts
import asyncWrapper from 'asyncWrapper'
...
app.get('/foo', asyncWrapper(someAsyncRouteFunction))
```


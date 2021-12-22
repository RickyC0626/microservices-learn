# Calculator Service

A simple service that performs calculations for you via REST API.

## Installation

```shell
# Install dependencies
yarn

# Run app in development mode (hot reload)
yarn dev

# Run tests
yarn test # verbose
yarn test:watch # hot reload

# Run app in production mode
yarn build
yarn start
```

## Available Routes

### API v1

The root route for this service:
- `/calc/api/v1`

Simple arithmetic functions:
- [`/calc/api/v1/sub`](src/README.md#subtraction) - subtract 2 or more numbers
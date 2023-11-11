## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Challenges 
- It felt like the documentation was immature, I could not get typeorm's scale option to work when trying to set a max decimal place in the DB, and I had to end up using the class validators
- Figuring out typeorm relations and their auto synchorize took a while, would love to be pointed to documentation for this.

## TODOs:
- Figure out a way to make the class validator rejections return a semantic error response
- Create unit-tests for the various services


[![License](http://img.shields.io/npm/l/boats.svg)](https://github.com/johndcarmichael/openapi-nodegen-mem-mongo-loader/blob/master/LICENSE) | [![Dependencies](https://david-dm.org/johndcarmichael/openapi-nodegen-mem-mongo-loader.svg)](https://david-dm.org/johndcarmichael/openapi-nodegen-mem-mongo-loader) | [![Codecov Coverage](https://img.shields.io/codecov/c/github/johndcarmichael/openapi-nodegen-mem-mongo-loader/master.svg?style=flat-square)](https://codecov.io/gh/johndcarmichael/openapi-nodegen-mem-mongo-loader/) | [![Build Status](https://api.travis-ci.org/johndcarmichael/openapi-nodegen-mem-mongo-loader.svg?branch=master)](https://travis-ci.org/johndcarmichael/openapi-nodegen-mem-mongo-loader)

# openapi-nodegen-mem-mongo-loader
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Perquisites](#perquisites)
- [Example](#example)
- [Contribution](#contribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

A simple helper, setup helper and stop helper.

Handy for usage in jest tests, beforeAll and afterAll... but also/mainly.. I didn't want to write tests for this in my APIs or ignore in APIs jest config files.

## Perquisites
It assumes you use mongoose, should be installed in your API. It is marked as a peer dep in this package.json file.

It does not assume you install mongodb-memory-server so installed as a dependency to this package.


## Example
```typescript
describe('registerEmailPost domain', () => {

  beforeAll(async () => {
    await MemoryMongoDatabase.setup();
  });

  afterAll(async () => {
    await MemoryMongoDatabase.stop();
  });
  // add some tests
})
```

## Contribution
Pull requests welcomed as always.

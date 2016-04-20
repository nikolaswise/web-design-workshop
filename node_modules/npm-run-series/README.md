# npm-run-series

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/npm-run-series.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/npm-run-series
[travis-image]: https://img.shields.io/travis/paulcpederson/npm-run-series.svg?style=flat-square
[travis-url]: https://travis-ci.org/paulcpederson/npm-run-series
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Run a series of npm scripts sequentially.

## Install

```
npm install npm-run-series
```

## Usage

In your `package.json`, inside the `scripts` object, you can use the `npm run series` command to run multiple npm scripts in order. For example:

```json
"scripts": {
  "one": "echo 'first one'",
  "two": "echo 'second one'",
  "three": "echo 'third one'",
  "everything": "npm-run-series one two three"
}
```

Now if you use `npm run everything` it will run `one` then `two` then `three`. So the output will be:

```
first one
second one
third one
```

You can also use npm-run-series from the Node API:

```
var npmSeries = require('npm-run-series')

npmSeries(['test', 'build'], function (err) {
  // runs `npm run test` and `npm run build`
  // err as soon as any process exits with error code
})
```

## License

[ISC](LICENSE)

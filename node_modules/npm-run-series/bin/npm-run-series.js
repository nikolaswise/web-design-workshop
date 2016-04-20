#!/usr/bin/env node
var runSeries = require('../')
var argv = process.argv.slice(2)

runSeries(argv, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  process.exit(0)
})

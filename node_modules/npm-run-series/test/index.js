var fs = require('fs')
var path = require('path')
var test = require('tape')
var series = require('../')
var rimraf = require('rimraf')

var tmp = path.join(process.cwd(), 'test', 'tmp')

test('Runs npm scripts in series', function (t) {
  t.plan(2)
  rimraf.sync(tmp)
  series(['one', 'two'], function (err) {
    t.error(err, 'Did not throw an error')
    var copiedFile = fs.readFileSync(path.join(tmp, 'copy.txt'), 'utf8')
    t.equal(copiedFile, 'BANANAS', 'Copied the first file')
    rimraf.sync(tmp)
  })
})

test('Runs any number of scripts', function (t) {
  t.plan(3)
  rimraf.sync(tmp)
  series(['one', 'two', 'three'], function (err) {
    t.error(err, 'Did not throw an error')
    var firstFile = fs.readFileSync(path.join(tmp, 'copy.txt'), 'utf8')
    var secondFile = fs.readFileSync(path.join(tmp, 'new.txt'), 'utf8')
    t.equal(firstFile, 'BANANAS', 'Copied first file.')
    t.equal(secondFile, 'BANANAS', 'Copied the second file.')
    rimraf.sync(tmp)
  })
})

test('throws an error and exits on first error', function (t) {
  t.plan(5)
  rimraf.sync(tmp)
  series(['error', 'one'], function (err) {
    t.ok(err, 'Threw an error')
    t.equal(err.code, 1, 'Error code correct')
    t.equal(err.cmd, 'npm run error', 'Error cmd correct')
    t.equal(err.message, 'command "npm run error" exited with wrong status code "1"', 'Error message correct')
    try {
      fs.readFileSync(path.join(tmp, 'copy.txt'), 'utf8')
    } catch (e) {
      t.ok(e, 'Did not run the second command')
    }
    rimraf.sync(tmp)
  })
})

var exec = require('child_process').exec
var test = require('tape')

test('Bin runs scripts', function (t) {
  t.plan(3)
  exec('node ./bin/npm-run-series "echo1" "echo2"', function (err, stdout, stderr) {
    t.error(err, 'Did not throw an error')
    t.ok(stdout.indexOf('check for this first string') > -1, 'Executed first script')
    t.ok(stdout.indexOf('check for this second string') > -1, 'Executed second script')
  })
})

test('bin throws an error and exits on first error', function (t) {
  t.plan(4)
  exec('node ./bin/npm-run-series "error" "one"', function (err, stdout, stderr) {
    t.ok(err, 'Threw an error')
    t.equal(err.code, 1, 'Error code correct')
    t.equal(err.cmd, '/bin/sh -c node ./bin/npm-run-series "error" "one"', 'Error cmd correct')
    t.ok(err.message.indexOf('command "npm run error" exited with wrong status code "1"') > -1, 'Passed error message')
  })
})

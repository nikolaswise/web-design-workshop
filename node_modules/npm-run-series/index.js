var spawn = require('child_process').spawn
var fmt = require('util').format

function exec (cmd, cb) {
  var parts = fmt('npm run %s', cmd).split(/\s+/g)
  var p = spawn(parts.shift(), parts, {stdio: 'inherit'})
  p.on('exit', function (code) {
    var err = null
    if (code) {
      var runCommand = fmt('npm run %s', cmd)
      var message = fmt('command "%s" exited with wrong status code "%s"', runCommand, code)
      err = new Error(message)
      err.code = code
      err.cmd = runCommand
    }
    return cb(err)
  })
}

module.exports = function (cmds, cb) {
  var execNext = function () {
    exec(cmds.shift(), function (err) {
      if (err) {
        return cb(err)
      } else if (cmds.length) {
        return execNext()
      } else {
        return cb(null)
      }
    })
  }
  return execNext()
}
